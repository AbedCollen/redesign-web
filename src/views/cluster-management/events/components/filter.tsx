/* eslint-disable react/no-array-index-key */
import type { FC } from 'react';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

interface FilterDropdownProps {
  readonly items: { eventKey: string, label: string }[] // Accept a list of items
  readonly onFilterChange: (filter: string) => void
  readonly selectedFilter: string
}

const FilterDropdown: FC<FilterDropdownProps> = ({ selectedFilter, onFilterChange, items }) => {
  const handleFilter = (eventKey: string | null) => {
    if (eventKey !== null) {
      onFilterChange(eventKey);
    }
  };

  return (
    <Dropdown onSelect={(e) => handleFilter(e || selectedFilter)}>
      <Dropdown.Toggle
        className="d-flex align-items-center border-neutral-50"
        variant="outline-dark"
      >
        {selectedFilter}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item) => ( // Map over the items
          <Dropdown.Item eventKey={item.eventKey} key={item.eventKey}>
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

FilterDropdown.displayName = 'FilterDropdown';
export { FilterDropdown };
