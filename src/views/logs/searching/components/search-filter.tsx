/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';

import { PlusCircle, XCircle } from '@nxweb/icons/feather';

interface SearchFilterProps {
  items: { key: string, label: string }[]
}

const SearchFilter: React.FC<SearchFilterProps> = ({ items }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterToggle = (eventKey: string) => {
    if (selectedFilters.includes(eventKey)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== eventKey)
      );
    } else {
      setSelectedFilters([...selectedFilters, eventKey]);
    }
  };

  const handleFilterRemove = (eventKey: string) => {
    setSelectedFilters(selectedFilters.filter((filter) => filter !== eventKey));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        className="d-flex align-items-center multi-filter border-neutral-50"
        variant="outline-dark"
      >
        {selectedFilters.length === 0
          ? 'Select Filter'
          : `${selectedFilters.length} Filter(s) selected`}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {selectedFilters.length > 0 && (
          <div className="selected-filters-dropdown p-1">
            <p className="fw-bold m-0">SELECTED FIELDS</p>
            {selectedFilters.map((filter) => (
              <div className="selected-filter-item" key={filter}>
                <Row className="align-items-center">
                  <Col sm={8}>
                    <div className="m-0 ms-1">{filter}</div>
                  </Col>
                  <Col sm={4}>
                    <Button
                      size="sm"
                      variant="link"
                      onClick={() => handleFilterRemove(filter)}
                    >
                      <XCircle color="white" fill="red" size={18} />
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        )}
        <div className="dropdown-divider" />
        <div className="p-1">
          <p className="fw-bold m-0">INTERSETING FIELDS</p>
          {items.map((field) => (
            <Row className="align-items-center" key={field.key}>
              <Col sm={8}>
                <div className="m-0 ms-1">{field.label}</div>
              </Col>
              <Col sm={4}>
                <Button
                  variant="link"
                  onClick={() => handleFilterToggle(field.key)}
                >
                  <PlusCircle color="white" fill="primary" size={18} />
                </Button>
              </Col>
            </Row>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

SearchFilter.displayName = 'SearchFilter';
export { SearchFilter };
