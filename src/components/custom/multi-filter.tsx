import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';

interface MultiFilterProps {
  items?: { label: string, value: number | string }[]
  selectedItems?: (number | string)[]
  onConfirm?: (val: (number | string)[]) => void
}

const MultiFilter: FC<MultiFilterProps> = ({
  items,
  selectedItems,
  onConfirm
}) => {
  const [currentFilter, setCurrentFilter] = useState(selectedItems || []);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setCurrentFilter(selectedItems || []);
  }, [reset, selectedItems]);

  return (
    <Dropdown onToggle={() => setReset(!reset)}>
      <Dropdown.Toggle className="multi-filter border-neutral-50" variant="outline-dark">
        {selectedItems?.length || 'Select'} Filter
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className="px-2 py-75">
          <div className="text-body-2 fw-bold text-neutral-90">
            Show items based on columns:
          </div>
          <div className="d-flex flex-column gap-1 my-1">
            {items?.map((o) => {
              return (
                <div key={o.value}>
                  <Form.Check
                    checked={currentFilter?.includes(o.value)}
                    className="text-body-3 fw-medium text-neutral-80"
                    label={o.label}
                    type="checkbox"
                    onChange={(e) => (e.target.checked ? setCurrentFilter([...currentFilter, o.value]) : setCurrentFilter(currentFilter?.filter((x) => x !== o.value)))} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="multi-filter-footer d-flex align-items-center gap-1 flex-nowrap py-75 px-2">
          <Button className="w-100 justify-content-center" variant="outline-danger" onClick={() => setCurrentFilter([])}>
            Clear
          </Button>
          <Dropdown.Item as={Button} className="d-flex align-items-center justify-content-center gap-50 w-100" variant="primary" onClick={() => onConfirm?.(currentFilter)}>
            Apply
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

MultiFilter.displayName = 'MultiFilter';

export { MultiFilter };
