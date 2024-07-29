/* eslint-disable react/jsx-key */
import type { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface MetadataCardProps {
  readonly age: string
  readonly annotation?: string[]
  readonly created: string
  readonly labels?: string[]
  readonly name: string
  readonly namespace?: string
  readonly uid: string
}

const MetadataCard: FC<MetadataCardProps> = ({
  name,
  namespace,
  created,
  age,
  uid,
  labels,
  annotation
}) => {
  return (
    <Card className="shadow-none mb-2">
      <Card.Header className="border border-5 border-primary-header rounded-top text-primary-header fw-bold">
        Metadata
      </Card.Header>
      <div className="d-flex flex-row py-2 border rounded-bottom">
        <Container>
          <Row>
            <Col>
              <p className="fw-bold text-dark my-0 fs-5">Name</p>
              <p>{name}</p>
            </Col>
            {namespace
              ? (
              <Col>
                <p className="fw-bold text-dark m-0 fs-5">Namespace</p>
                <p>{namespace}</p>
              </Col>
              )
              : null}
            <Col>
              <p className="fw-bold text-dark m-0 fs-5">Created</p>
              <p>{created}</p>
            </Col>
            <Col>
              <p className="fw-bold text-dark m-0 fs-5">Age</p>
              <p>{age}</p>
            </Col>
            <Col sm={4}>
              <p className="fw-bold text-dark m-0 fs-5">UID</p>
              <p>{uid}</p>
            </Col>
          </Row>

          {labels
            ? (
            <Row>
              <Col>
                <div>
                  <p className="fw-bold text-dark m-0 fs-5">Labels</p>
                  <div className="d-flex flex-wrap gap-1">
                    {labels?.map((item) => {
                      return (
                        <div className="rounded d-flex align-items-center gap-25 px-75 py-25 mt-50 border">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
            )
            : null}

          {annotation
            ? (
            <Row>
              <Col>
                <div className="pt-2">
                  <p className="fw-bold text-dark m-0 fs-5">Annotation</p>
                  <div className="d-flex flex-wrap gap-1">
                    {annotation?.map((item) => {
                      return (
                        <div className="rounded d-flex align-items-center gap-25 px-75 py-25 mt-50 border">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
            )
            : null}
        </Container>
      </div>
    </Card>
  );
};

MetadataCard.displayName = 'MetadataCard';
export { MetadataCard };
