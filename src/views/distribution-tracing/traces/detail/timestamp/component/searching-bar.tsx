/* eslint-disable react/jsx-key */
import { Button, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap';

import { ResponsiveBar } from '@nivo/bar';

import { MoreVertical, Play, Search } from '@nxweb/icons/feather';

import { TIME_FILTER_DROPDOWN } from '@src/views/distribution-tracing/constants';
import { DUMMY_DATA_BARCHART } from '@src/views/distribution-tracing/traces/constants';

const SearchingBar = () => {
  return (
    <>
      <div>
        <Row className="d-flex align-items-center p-1">
          <Col>
            <InputGroup className="w-75">
              <Form.Control
                className="w-25 border-end-0"
                placeholder="Search Filter" />
              <InputGroup.Text className="border-start-0">
                <Search className="text-neutral-50" size={24} />
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <div className="d-flex justify-content-end">
              <div className="me-1">
                <Button
                  className="d-flex align-items-center justify-content-center gap-50"
                  variant="primary"
                >
                  Go Live
                  <Play fill="white" size={16} />
                </Button>
              </div>
              <div>
                <Dropdown className="no-arrow">
                  <Dropdown.Toggle variant="outline-primary">
                    <MoreVertical size={16} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Form.Group className="px-1">
                      <Form.Label className="my-1">
                        Select Live Tail Timing
                      </Form.Label>
                      <Form.Select aria-label="Default select example">
                        {TIME_FILTER_DROPDOWN.map((value) => <option value="0">{value.eventKey}</option>)}
                      </Form.Select>
                    </Form.Group>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ height: '400px', width: '100%' }}>
        <ResponsiveBar
          ariaLabel="Nivo bar chart demo"
          axisBottom={{
            tickPadding: 5,
            tickRotation: 0,
            tickSize: 5
          }}
          axisLeft={{
            tickPadding: 5,
            tickRotation: 0,
            tickSize: 5
          }}
          axisRight={null}
          axisTop={null}
          colors={[DUMMY_DATA_BARCHART[1].valueColor]}
          data={DUMMY_DATA_BARCHART}
          enableLabel={false}
          indexBy="date"
          indexScale={{ round: true, type: 'band' }}
          keys={['value']}
          legends={[]}
          margin={{ bottom: 50, left: 60, right: 130, top: 50 }}
          maxValue={6000}
          padding={0.3}
          role="application" />
      </div>
    </>
  );
};

SearchingBar.displayName = 'SearchingBar';

export default SearchingBar;
