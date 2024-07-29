/* eslint-disable react/jsx-key */
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

import { ResponsiveBar } from '@nivo/bar';

import { Search } from '@nxweb/icons/feather';

import { DUMMY_DATA_BARCHART } from '../constants';

const SearchingBar = () => {
  return (
    <>
      <div>
        <Row className="d-flex align-items-center p-1">
          <Col>
            <InputGroup className="w-50">
              <Form.Control
                className="w-25 border-end-0"
                placeholder="Search Filter" />
              <InputGroup.Text className="border-start-0">
                <Search className="text-neutral-50" size={24} />
              </InputGroup.Text>
            </InputGroup>
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
          margin={{ bottom: 50, left: 50, right: 50, top: 40 }}
          maxValue={6000}
          padding={0.6}
          role="application" />
      </div>
    </>
  );
};

SearchingBar.displayName = 'SearchingBar';

export default SearchingBar;
