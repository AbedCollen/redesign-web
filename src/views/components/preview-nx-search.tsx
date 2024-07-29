import { Col, Row } from 'react-bootstrap';

import { NxSearch } from '@components/custom';

const DEFAULT_OPTIONS = [
  { label: 'Key 1', value: 'key 1' },
  { label: 'Key 2', value: 'key 2' }
];

const PreviewNxSearch = () => {
  const handleSearch = (value: {
    keys: (number | string)[]
    search: string
  }) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <div>
      <Row className="mb-2">
        <Col className="d-flex align-items-center justify-content-center" xs={6}>
          <NxSearch
            defaultSelectedKeys={[DEFAULT_OPTIONS[0].value]}
            options={DEFAULT_OPTIONS}
            onSearch={handleSearch} />
        </Col>
      </Row>
    </div>
  );
};

PreviewNxSearch.displayName = 'PreviewNxSearch';
export { PreviewNxSearch };
