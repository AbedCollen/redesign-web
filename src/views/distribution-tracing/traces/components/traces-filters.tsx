import {
  Accordion,
  Button,
  Form,
  FormGroup,
  InputGroup,
  Row
} from 'react-bootstrap';

import { Search } from '@nxweb/icons/bootstrap';

const TracesFilters = () => {
  return (
    <Form className="d-flex gap-50 row py-1 justify-content-center">
      <Row>
        <Button className="btn-primary rounded-2 py-1 border-bottom">
          Clear all Filters
        </Button>
      </Row>
      <Row>
        <Accordion className="p-0" defaultActiveKey="0">
          <Accordion.Item className="border-0 border-bottom" eventKey="1">
            <Accordion.Header className="accordion-left-button">
              Duration{' '}
            </Accordion.Header>
            <Accordion.Body className="nx-form-control d-flex flex-column gap-2">
              <FormGroup className="d-flex justify-content-start flex-column">
                <p className="form-label text-start">Min</p>
                <InputGroup>
                  <Form.Control placeholder="0.00" />
                  <InputGroup.Text>ms</InputGroup.Text>
                </InputGroup>
              </FormGroup>
              <FormGroup className="d-flex justify-content-start flex-column">
                <p className="form-label text-start">Max</p>
                <InputGroup>
                  <Form.Control placeholder="0.00" />
                  <InputGroup.Text>ms</InputGroup.Text>
                </InputGroup>
              </FormGroup>
              <input className="form-range" id="customRange1" type="range" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion className="p-0" defaultActiveKey="0">
          <Accordion.Item className="border-0 border-bottom" eventKey="1">
            <Accordion.Header className="accordion-left-button">
              Status{' '}
              <a className="ms-auto" href="#">
                Clear All
              </a>
            </Accordion.Header>
            <Accordion.Body className="d-flex row  gap-75">
              <InputGroup>
                <Form.Control
                  className="w-25 border-end-0"
                  placeholder="Search By.." />
                <InputGroup.Text className="border-start-0">
                  <Search className="text-neutral-50" size={24} />
                </InputGroup.Text>
              </InputGroup>
              <div>
                <div>
                  <div className="d-flex align-items-center gap-50">
                    <input
                      className="me-1"
                      id="always"
                      name="image"
                      type="radio"
                      value="always" />
                    <label htmlFor="always">Ok</label>
                    <p className="ms-auto">0</p>
                  </div>
                  <div className="d-flex align-items-center gap-50">
                    <input
                      className="me-1"
                      id="never"
                      name="image"
                      type="radio"
                      value="never" />
                    <label htmlFor="never">Error</label>
                    <p className="ms-auto">0</p>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion className="p-0" defaultActiveKey="0">
          <Accordion.Item className="border-0 border-bottom" eventKey="1">
            <Accordion.Header className="accordion-left-button">
              Service Name{' '}
            </Accordion.Header>
            <Accordion.Body className="">test</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion className="p-0" defaultActiveKey="0">
          <Accordion.Item className="border-0 border-bottom" eventKey="1">
            <Accordion.Header className="accordion-left-button">
              Operation{' '}
            </Accordion.Header>
            <Accordion.Body className="">test</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <Accordion className="p-0" defaultActiveKey="0">
          <Accordion.Item className="border-0 border-bottom" eventKey="1">
            <Accordion.Header className="accordion-left-button">
              Component{' '}
            </Accordion.Header>
            <Accordion.Body className="">test</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Form>
  );
};

TracesFilters.displayName = 'TracesFilters';
export { TracesFilters };
