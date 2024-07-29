/* eslint-disable react/jsx-key */
import type { FC } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import { Search } from '@nxweb/icons/feather';

interface SearchFilterProps {
  readonly onSearchChange: (text: string) => void
}

const SearchFilter: FC<SearchFilterProps> = ({ onSearchChange }) => {
  return (
    <InputGroup>
      <Form.Control
        className="w-25 border-end-0"
        placeholder="Search by.."
        onChange={(e) => onSearchChange(e.target.value)} />
      <InputGroup.Text className="border-start-0">
        <Search className="text-neutral-50" size={24} />
      </InputGroup.Text>
    </InputGroup>
  );
};

SearchFilter.displayName = 'SearchFilter';
export { SearchFilter };
