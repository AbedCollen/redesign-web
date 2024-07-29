/* eslint-disable react/no-array-index-key */
import {  useState } from 'react';
import type { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import { formatDate, fromNow } from '@nxweb/core/date';

import { SearchFilter } from '@components/custom/search-filter';

import { FilterDropdown } from './filter';

interface alertEventProp {
  condition: string
  date: string
  description: string
  namespace: string
  status: string
  time: string
  title: string
}

const EventFilter = [
  {
    eventKey: 'All',
    label: 'All'
  },
  {
    eventKey: 'Warning',
    label: 'Warning'
  },
  {
    eventKey: 'Info',
    label: 'Info'
  },
  {
    eventKey: 'Error',
    label: 'Error'
  }
];

const IntervalFilter = [
  {
    eventKey: 'default',
    label: 'default'
  },
  {
    eventKey: '1s',
    label: '1s'
  },
  {
    eventKey: '5s',
    label: '5s'
  },
  {
    eventKey: '10s',
    label: '10s'
  },
  {
    eventKey: '30s',
    label: '30s'
  },
  {
    eventKey: '60s',
    label: '60s'
  }
];

interface RowTableProps {
  readonly data: alertEventProp[]
}

const EventRowData: FC<RowTableProps> = ({ data }) => {
  const getEventColor = (type: string) => {
    let color = '';
    switch (type) {
      case 'i':
        color = 'bg-info';
        break;
      case 'W':
        color = 'bg-warning';
        break;
      case 'E':
        color = 'bg-danger';
        break;

      default:
        color = 'bg-secondary';
        break;
    }

    return color;
  };

  const [selectedEvent, setSelectedEvent] = useState<string>('All');

  const handleEvent = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedEvent(eventKey);
    }
  };

  const [selectedInterval, setSelectedInterval] = useState<string>('default');

  const handleInterval = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedInterval(eventKey);
    }
  };

  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="border rounded p-1">
      <Row className="mb-1 ">
        <Col>
          <SearchFilter onSearchChange={handleSearchChange} />
        </Col>
        <Col>
          <div className="d-flex justify-content-end">
            <div className="d-flex align-items-center me-1">
              <div className="fw-bold me-1">Event</div>
              <FilterDropdown items={EventFilter} selectedFilter={selectedEvent} onFilterChange={handleEvent} />
            </div>
            <div className="d-flex align-items-center">
              <div className="fw-bold me-1">Interval</div>
              <FilterDropdown items={IntervalFilter} selectedFilter={selectedInterval} onFilterChange={handleInterval} />
            </div>
          </div>
        </Col>
      </Row>
      <div className="p-1">
        <Row className="border rounded-top border-2 border-dark p-1">
          <Col sm={2}>
            <div className="fw-bold fs-5">Date</div>
          </Col>
          <Col sm={8}>
            <div className="fw-bold fs-5">Events</div>
          </Col>
          <Col sm={2}>
            <div className="fw-bold fs-5">Namespaces</div>
          </Col>
        </Row>
        <Row className="border rounded-bottom p-1">
          <div>
            {filteredData.filter((event) => {
              if (selectedEvent === 'All') {
                return true; // Show all events when 'All' is selected
              }

              if (selectedEvent === 'Error') {
                return event.condition === 'E'; // Show only 'E' events for 'Error'
              }

              if (selectedEvent === 'Warning') {
                return event.condition === 'W'; // Show only 'W' events for 'Warning'
              }

              if (selectedEvent === 'Info') {
                return event.condition === 'i'; // Show only 'i' events for 'Info'
              }

              return true; // Default to showing all events
            })
              .map((event, index) => (
                <Row className="mt-1" key={index}>
                  <Col sm={2}>
                  <Row>
                    <p className="text-end ps-0 fw-bold">
                      {fromNow(event.date)}
                    </p>
                  </Row>
                  <Row>
                    <p className="text-end ps-0">
                      {formatDate(event.date, 'YYYY-MM-DD')}
                    </p>
                  </Row>
                  </Col>
                <Col className="border rounded p-1" sm={8}>
                  <Row>
                    <div
                      className={`me-1 ${getEventColor(
                        event.condition
                      )} text-center ms-1 d-flex align-items-center justify-content-center rounded-circle alert-circle icon`}
                    >
                      {event.condition}
                    </div>

                    <Col>
                      <Row className="fs-5 fw-bold mb-1">{event.title}</Row>
                      <Row className="mb-1">{event.status}</Row>
                      <Row className="mb-1">{event.description}</Row>
                    </Col>
                  </Row>
                </Col>
                <Col className="fw-bold" sm={2}>
                  {event.namespace}
                </Col>
                </Row>
              ))}
          </div>
        </Row>
      </div>
    </div>
  );
};

EventRowData.displayName = 'EventRowData';

export { EventRowData };
