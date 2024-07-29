import {  useEffect, useState } from 'react';
import type { FC } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import { debounce } from '@nxweb/core/web';
import { Search } from '@nxweb/icons/feather';

import { MultiFilter } from '.';

interface OptionsDataModel {
  label: string
  value: string
}

interface NxSearchProps {
  defaultSelectedKeys?: (number | string)[]
  onSearch?: (result: { keys: (number | string)[], search: string }) => void
  options?: OptionsDataModel[]
  placeholder?: string
  wait?: number
}

const EMPTY_SELECTED_KEYS: (number | string)[] = [];
const EMPTY_OPTIONS: OptionsDataModel[] = [];
const EMPTY_FUNC = () => {};

const NxSearch: FC<NxSearchProps> = ({ defaultSelectedKeys = EMPTY_SELECTED_KEYS, options = EMPTY_OPTIONS, placeholder = 'Search By...', wait = 250, onSearch = EMPTY_FUNC }) => {
  const [selectedFilter, setSelectedFilter] = useState<(number | string)[]>([]);

  const handleSearch = debounce((value: string) => {
    onSearch({
      keys: selectedFilter,
      search: value
    });
  }, wait);

  useEffect(() => {
    if (defaultSelectedKeys.length) {
      setSelectedFilter(defaultSelectedKeys);
    }
  }, [defaultSelectedKeys]);

  return (
    <InputGroup>
      <Form.Control
        className="w-25 border-end-0"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)} />
      <InputGroup.Text className="border-start-0">
        <Search
          className="text-neutral-50"
          size={24} />
      </InputGroup.Text>
      <MultiFilter
        items={options}
        selectedItems={selectedFilter}
        onConfirm={(val) => setSelectedFilter(val)} />
    </InputGroup>
  );
};

NxSearch.displayName = 'NxSearch';
export { NxSearch };
