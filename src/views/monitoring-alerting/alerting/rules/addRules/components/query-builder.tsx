/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Button, Col, Dropdown, Form, InputGroup } from 'react-bootstrap';

import { EyeFill, EyeSlashFill } from '@nxweb/icons/bootstrap';
import { Minus, Plus, Trash2 } from '@nxweb/icons/feather';

import { FORM_METRIC_NAME, FORM_NOOP_LABEL } from '../../constant';

const QueryBuilder = () => {
  const [inputs, setInputs] = useState<string[]>([]);

  const [eyeType, setEyeType] = useState<boolean[]>([true]);
  const eyeToggle = (index: number) => {
    eyeType[index] = !eyeType[index];
    setEyeType([...eyeType]);
  };

  const [condition, setCondition] = useState<boolean[]>([false]);
  const removeAll = () => {
    setInputs([]);
    setEyeType([true]);
    setCondition([false]);
  };

  const conditionToggle = (index: number) => {
    condition[index] = !condition[index];
    setCondition([...condition]);
  };

  const addInput = () => {
    setEyeType([...eyeType, true]);
    setCondition([...condition, false]);
    setInputs([...inputs, '']);
  };

  const removeInput = (index: number) => {
    const updatedInputs = [...inputs];
    const updatedEyeType = [...eyeType];
    const updatedCondition = [...condition];

    updatedInputs.splice(index, 1);
    updatedEyeType.splice(index, 1);
    updatedCondition.splice(index, 1);
    setInputs(updatedInputs);
    setEyeType(updatedEyeType);
    setCondition(updatedCondition);
  };

  const [selectedMetrics, setSelectedMetrics] = useState('NOOP');
  const [selectedMetricsName, setSelectedMetricsName] = useState('Metric name');

  return (
    <div className="flex-column d-flex gap-2">
      <div className="flex-column d-flex gap-2">
        {inputs.map((_input, index) => (
          <div className="d-flex gap-2" key={index}>
            <Col className="d-flex flex-column gap-1">
              <div className="d-flex gap-2">
                {eyeType[index] === true
                  ? (
                  <Button
                    className="d-flex align-items-center gap-50"
                    variant="primary"
                    onClick={() => eyeToggle(index)}
                  >
                    <EyeFill fill="currentColor" size={17} />A
                  </Button>
                  )
                  : (
                  <Button
                    className="d-flex align-items-center gap-50"
                    variant="outline-primary"
                    onClick={() => eyeToggle(index)}
                  >
                    <EyeSlashFill size={17} />A
                  </Button>
                  )}

                <InputGroup.Text>Metrics</InputGroup.Text>
                <div className="w-25">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="w-100 d-flex flex-row align-items-center"
                      variant="outline-secondary"
                    >
                      <div className="d-flex align-items-center justify-content-start gap-50">
                        {selectedMetrics}
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {FORM_NOOP_LABEL.map((value) => (
                        <Dropdown.Item
                          key={value.label}
                          onClick={() => setSelectedMetrics(value.label)}
                        >
                          {value.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="w-25">
                  <Dropdown className="no-arrow">
                    <Dropdown.Toggle
                      className="w-100"
                      variant="outline-secondary"
                    >
                      <div className="d-flex align-items-center justify-content-start gap-50">
                        {selectedMetricsName}
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {FORM_METRIC_NAME.map((value) => (
                        <Dropdown.Item
                          key={value.label}
                          onClick={() => setSelectedMetricsName(value.label)}
                        >
                          {value.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <InputGroup className="d-flex gap-1">
                <Col sm={1}>
                  <InputGroup.Text className="rounded-2 d-flex justify-content-center">
                    WHERE
                  </InputGroup.Text>
                </Col>
                <Form.Control
                  className="rounded-2 bg-secondary"
                  placeholder={`"Search Filter: select option from the other side"`} />
              </InputGroup>
              <InputGroup className="d-flex gap-1">
                <Col sm={1}>
                  <InputGroup.Text className="rounded-2 d-flex justify-content-center">
                    Group by
                  </InputGroup.Text>
                </Col>
                <Form.Control
                  className="rounded-2"
                  placeholder="metric names" />
              </InputGroup>
              <div className="d-flex align-items-center gap-2">
                <Button
                  size="lg"
                  variant="outline-primary"
                  onClick={() => conditionToggle(index)}
                >
                  {condition[index] === false
                    ? <Plus size={13} />

                    : <Minus size={13} />}
                </Button>
                <span>
                  Add conditions for{' '}
                  <span className="text-primary">AGGREGATION INTERVAL</span> and{' '}
                  <span className="text-primary">HAVING</span>
                </span>
              </div>
              {condition[index] === true && (
                <div className="d-flex gap-5">
                  <InputGroup className="d-flex gap-1">
                    <Col sm={2}>
                      <InputGroup.Text className="rounded-2 d-flex justify-content-center">
                        HAVING
                      </InputGroup.Text>
                    </Col>
                    <Form.Control
                      className="rounded-2"
                      placeholder="metric names" />
                  </InputGroup>
                  <InputGroup className="d-flex gap-1">
                    <InputGroup.Text className="rounded-2 d-flex justify-content-center">
                      Aggregate every
                    </InputGroup.Text>
                    <Form.Control
                      className="rounded-2"
                      placeholder="metric names" />
                  </InputGroup>
                </div>
              )}

              <div>
                <InputGroup className="d-flex">
                  <InputGroup.Text>Legend Format</InputGroup.Text>
                  <Form.Control placeholder="" />
                </InputGroup>
              </div>
            </Col>
            <div className="d-flex flex-column">
              <Button
                className="lh-1"
                variant="outline-danger"
                onClick={() => removeInput(index)}
              >
                <Trash2 className="text-danger" size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex flex-row gap-2">
        <Button
          className="d-flex align-items-center gap-50"
          size="sm"
          variant="primary"
          onClick={addInput}
        >
          <Plus size={20} />
          Query
        </Button>
        <Button
          className="d-flex align-items-center gap-50"
          size="sm"
          variant="outline-primary"
        >
          <Plus size={20} />
          Formula
        </Button>
        {inputs.length === 0 && (
          <Button
            className="d-flex align-items-center gap-50"
            disabled={true}
            size="sm"
            variant=""
            onClick={removeAll}
          >
            <Trash2 size={20} />
            Remove All
          </Button>
        )}
        {inputs.length > 0 && (
          <Button
            className="d-flex align-items-center gap-50 border-0 shadow-none"
            size="sm"
            variant="outline-danger"
            onClick={removeAll}
          >
            <Trash2 size={20} />
            Remove All
          </Button>
        )}
      </div>
    </div>
  );
};

QueryBuilder.displayName = 'QueryBuilder';

export default QueryBuilder;
