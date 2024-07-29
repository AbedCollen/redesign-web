import type { FC } from 'react';
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap';

import { Edit2, MoreVertical, Trash2 } from '@nxweb/icons/feather';
import { Expand } from '@nxweb/icons/ionicons';

interface BrandCardProps {
  readonly brandingName: string
  readonly platformName: string
  readonly platformLogo: string
  readonly isPlatformLogoActive: boolean
  readonly backgroundColor: string
  readonly backgroundImage: string
  readonly isBackgroundImageActive: boolean
  readonly title: string
  readonly welcomeText: string
  readonly messageOfTheDay: string
  readonly useMOTDService: boolean
  readonly about: string
  readonly css: string
  readonly script: string
  readonly toggleModal: () => void
  readonly pageSource: string
  readonly index: number
  readonly activeSwitchIndex: number | null
  readonly handleSwitchToggle: (index: number) => void
}

const BrandCard: FC<BrandCardProps> = ({
  brandingName,
  platformName,
  isPlatformLogoActive,
  backgroundColor,
  isBackgroundImageActive,
  title,
  welcomeText,
  messageOfTheDay,
  useMOTDService,
  about,
  toggleModal,
  pageSource,
  index,
  activeSwitchIndex,
  handleSwitchToggle
}) => {
  return (
    <Col key={brandingName} xl={4}>
      <Card>
        <Card.Header className="border-primary-header rounded-top py-2 d-flex">
          <div>
            <h6 className="m-0">{brandingName}</h6>
          </div>
          <div className="d-flex align-items-center gap-50">
            <Form.Check
              checked={activeSwitchIndex === index}
              id={`custom-switch-${index}`}
              type="switch"
              onChange={() => handleSwitchToggle(index)} />

            <Dropdown className="no-arrow">
              <Dropdown.Toggle
                className="px-50 py-25 border-0"
                variant="outline"
              >
                <MoreVertical size={16} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="py-1 d-flex align-items-center gap-1"
                  href={`/settings/${pageSource}/branding/view/${index}`}
                >
                  <Expand size={16} /> View
                </Dropdown.Item>
                <Dropdown.Item
                  className="py-1 d-flex align-items-center gap-1"
                  href={`/settings/${pageSource}/branding/edit/${index}`}
                >
                  <Edit2 size={16} />
                  Edit
                </Dropdown.Item>
                <Dropdown.Item
                  className="py-1 text-danger d-flex align-items-center gap-1"
                  onClick={toggleModal}
                >
                  <Trash2 size={16} />
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Header>
        <Card.Body className="border-neutral-5 pt-2">
          <Row className="mb-1">
            <Col>
              <div className="fw-semibold mb-50">Platform Name:</div>
              <div>{platformName}</div>
            </Col>
            <Col>
              <div className="fw-semibold mb-50">Platform Logo:</div>
              <Form.Check
                className="mb-50"
                defaultChecked={isPlatformLogoActive}
                type="switch" />
              <div className="small">Hide Platform Logo</div>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <div className="fw-semibold mb-50">Background Color:</div>
              <div>{backgroundColor}</div>
            </Col>
            <Col>
              <div className="fw-semibold mb-50">Background Image:</div>
              <Form.Check
                className="mb-50"
                defaultChecked={isBackgroundImageActive}
                type="switch" />
              <div className="small">Hide Background Image</div>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <div className="fw-semibold mb-50">Title</div>
              <div>{title}</div>
            </Col>
            <Col>
              <div className="fw-semibold mb-50">Welcome Text</div>
              <div>{welcomeText}</div>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <div className="fw-semibold mb-50">Message of the Day</div>
              <Form.Check
                className="mb-50"
                defaultChecked={useMOTDService}
                type="switch" />
              <div className="small">Use MOTD Service</div>
            </Col>
            <Col className="d-flex align-items-center">{messageOfTheDay}</Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <div className="fw-semibold mb-50">About</div>
              <div>{about}</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

BrandCard.displayName = 'BrandCard';

export default BrandCard;
