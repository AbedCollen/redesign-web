import type { FC } from 'react';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';

import { Play, Plus, Trash2 } from '@nxweb/icons/feather';

import { NxFormControl } from '@components/custom/nx-form-control';

const SELECTION_ONE = [
  { key: 'EQUALS', value: 1 },
  { key: 'NOT EQUALS', value: 2 }
];

const SELECTION_TWO = [
  { key: 'Selection One', value: 1 },
  { key: 'Selection Two', value: 2 }
];

interface FilterByTagProps {
  readonly tags: string[]
  readonly handleTagsChange: (index: number, value: string) => void
  readonly addTags: () => void
  readonly removeTags: (index: number) => void
  readonly removeAllTags: () => void
}

const FilterByTag: FC<FilterByTagProps> = ({
  tags,
  handleTagsChange,
  addTags,
  removeAllTags,
  removeTags
}) => {
  return (
    <Row className="m-0">
      <Col>
        <div className="d-flex">
          <div className="me-1 w-100">
            <Dropdown className="no-arrow">
              <Dropdown.Toggle
                className="w-100 text-start p-75"
                variant="outline-secondary"
              >
                Click to filter by tags
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100">
                <Form.Group className="px-1 ">
                  <Form.Label className="my-1">Tags</Form.Label>
                  <div className="d-flex flex-column gap-75">
                    {tags.map((input, index) => (
                      <div key={input}>
                        {index >= 0 && (
                          <Row className="d-flex gap-50">
                            <Col>
                              <NxFormControl
                                className={{ label: 'd-none' }}
                                placeholder="Please Select"
                                type="text"
                                onChange={(e) => handleTagsChange(index, e.target.value)} />
                            </Col>

                            <Col>
                              <Form.Select aria-label="Default select example">
                                {SELECTION_ONE.map((o, index) => (
                                  <option key={index} value={o.value}>
                                    {o.key}
                                  </option>
                                ))}
                              </Form.Select>
                            </Col>

                            <Col>
                              <Form.Select aria-label="Default select example">
                                {SELECTION_TWO.map((o, index) => (
                                  <option key={index} value={o.value}>
                                    {o.key}
                                  </option>
                                ))}
                              </Form.Select>
                            </Col>

                            <Col className="w-auto flex-grow-0 flex-shrink-0">
                              <Button
                                variant="outline-danger"
                                onClick={() => removeTags(index)}
                              >
                                <Trash2 size={14} />
                              </Button>
                            </Col>
                          </Row>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-1 d-flex align-items-center gap-2">
                    <Button
                      className="d-flex align-items-center gap-50"
                      size="sm"
                      onClick={addTags}
                    >
                      <Plus size={14} />
                      Add Tags Filter
                    </Button>
                    <span>
                      Results will include spans with ALL the specified tags (
                      Rows are `ANDed` )
                    </span>
                  </div>
                  <div className="dropdown-divider" />
                  {tags.length >= 1 && (
                    <div className="d-flex gap-2 py-1 justify-content-end">
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={removeAllTags}
                      >
                        Reset
                      </Button>
                      <Button
                        className="d-flex align-items-center gap-50"
                        size="sm"
                        onClick={removeAllTags}
                      >
                        <Play fill="white" size={16} />
                        Run Query
                      </Button>
                    </div>
                  )}
                </Form.Group>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="me-1">
            <Button
              className="d-flex align-items-center justify-content-center gap-50 p-1"
            >
              <Play fill="white" size={17} />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

FilterByTag.displayName = 'FilterByTag';
export { FilterByTag };
