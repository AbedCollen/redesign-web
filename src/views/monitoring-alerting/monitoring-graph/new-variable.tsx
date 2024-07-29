/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { Check, Play, X } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom';
import { allRoutes } from '@config/constants';

const VARIABLE_TYPE = [
  { label: 'Query', value: 'query' },
  { label: 'Textbox', value: 'textbox' },
  { label: 'Custom', value: 'custom' }
];

const PREVIEW_SORT = [
  { label: 'Disable', value: 'disable' },
  { label: 'Ascending', value: 'ascending' },
  { label: 'Descending', value: 'descending' }
];

const NewVariableMain = () => {
  const [selectedType, setSelectedType] = useState('query');

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  const formControlClassName = { container: 'mb-1' };

  return (
    <div className="element-wrapper">
      <div className="p-2 d-flex justify-content-between shadow-sm">
        <h5 className="fw-bold text-black m-0">New Variable</h5>
        <div className="d-flex gap-75">
          <Button
            as="a"
            className="d-flex align-items-center gap-50"
            href={allRoutes.monitoringAlerting.monitoringGraph}
            variant="outline-danger"
          >
            <X size={16} />
            Cancel
          </Button>
          <Button
            as="a"
            className="d-flex align-items-center gap-50"
            href={allRoutes.monitoringAlerting.monitoringGraph}
            variant="primary"
          >
            <Check size={16} />
            Save
          </Button>
        </div>
      </div>
      <div className="p-2 mt-2 m-1 border rounded">
        <Form>
          <NxFormControl
            className={formControlClassName}
            label="Name"
            placeholder="Unique name of the variable"
            type="text" />

          <NxFormControl
            as="textarea"
            className={formControlClassName}
            label="Description"
            placeholder="Write description of the variable"
            rows={3} />
          <Form.Group>
            <Form.Label className="form-label">Type</Form.Label>
            <Form.Select onChange={handleTypeChange}>
              {VARIABLE_TYPE.map((item) => <option value={item.value}>{item.label}</option>)}
            </Form.Select>
          </Form.Group>
          <div className="border rounded p-1 mt-1">
            <p className="fw-bold text-dark fs-6">Option</p>
            {selectedType === 'query' && (
              <div>
                <NxFormControl
                  className={formControlClassName}
                  label="Query"
                  type="text" />
                <div className="d-flex justify-content-end">
                  <Button
                    className="d-flex align-items-center gap-50"
                    variant="outline-primary"
                  >
                    <Play fill="primary" size={16} />
                    Test Run Query
                  </Button>
                </div>
                <div className="border rounded p-1 mt-1">
                  <p className="fw-bold text-dark fs-6">Preview of Values</p>
                  <Form.Group>
                    <Form.Label className="form-label">Sort</Form.Label>
                    <Form.Select>
                      {PREVIEW_SORT.map((item) => <option value={item.value}>{item.label}</option>)}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mt-1">
                    <Form.Label className="form-label">Enable multiple values to be checked</Form.Label>
                  <Form.Check
                    type="switch" />
                  </Form.Group>
                </div>
              </div>
            )}
            {selectedType === 'textbox' && (
              <NxFormControl
                className={formControlClassName}
                label="Default Value"
                placeholder="Default value if any"
                type="text" />
            )}
            {selectedType === 'custom' && (
              <div>
                <NxFormControl
                  as="textarea"
                  className={formControlClassName}
                  label="Values separated by comma"
                  placeholder="1, 10, mykeyc mykey:myvalue"
                  rows={3} />
              <div className="border rounded p-1 mt-1">
                <p className="fw-bold text-dark fs-6">Preview of Values</p>
                <Form.Group>
                  <Form.Label className="form-label">Sort</Form.Label>
                  <Form.Select>
                    {PREVIEW_SORT.map((item) => <option value={item.value}>{item.label}</option>)}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mt-1">
                  <Form.Label className="form-label">Enable multiple values to be checked</Form.Label>
                <Form.Check
                  type="switch" />
                </Form.Group>
              </div>
              </div>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

NewVariableMain.displayName = 'NewVariableMain';
export { NewVariableMain };
