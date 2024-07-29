/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */

import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { Edit2, Eye } from '@nxweb/icons/feather';

import type { ServiceAccountsDataModel } from '@models/app/users-and-roles/service-accounts/types';

import { MAX_ITEMS, MAX_LETTERS } from './constants';

const columns = (
  detailServiceAccounts: (id: number) => void,
  editServiceAccounts: (id: number) => void,
  showAllItems: boolean[],
  handleToggleItems: (index: number, show: boolean) => void
): TableColumn<ServiceAccountsDataModel>[] => [
  {
    center: true,
    name: '#',
    selector: () => `#`,
    width: '50px'
  },
  {
    cell: (row) => row.name,
    grow: 1,
    name: 'Name',
    width: '250px'
  },
  {
    cell: (row, rowIndex) => {
      let listItems = row.labels.map((item, index) => (
        <div className="form-group" key={item + index}>
          <div className="rounded d-flex align-items-center gap-25 px-75 py-25 mx-25 my-50 border">
            {showAllItems || item.length <= MAX_LETTERS
              ? item
              : `${item.slice(0, MAX_LETTERS)}...`}
          </div>
        </div>
      ));

      const shouldTruncate =
        listItems.length > MAX_ITEMS && !showAllItems[rowIndex];

      if (shouldTruncate) {
        listItems = listItems.slice(0, MAX_ITEMS);
        listItems.push(
          <button
            className="btn btn-link d-flex align-items-center gap-25 px-75 py-25 mt-50"
            type="button"
            onClick={() => handleToggleItems(rowIndex, true)}
          >
            <div style={{ color: 'rgba(64, 101, 233, 1)' }}>Show More</div>
          </button>
        );
      }

      if (showAllItems[rowIndex]) {
        listItems.push(
          <button
            className="btn btn-link d-flex align-items-center gap-25 px-75 py-25 mt-50"
            type="button"
            onClick={() => handleToggleItems(rowIndex, false)}
          >
            <div style={{ color: 'rgba(64, 101, 233, 1)' }}>Hide</div>
          </button>
        );
      }

      const isExpanded = showAllItems || listItems.length <= MAX_ITEMS;

      return (
        <div
          className={isExpanded ? 'd-flex flex-wrap ' : 'd-flex flex-column '}
        >
          {listItems.map((item, index) => {
            return (
              <div
                className="form-group"
                key={index}
                style={{ color: 'rgba(64, 64, 64, 1)' }}
              >
                {item}
              </div>
            );
          })}
        </div>
      );
    },
    grow: 1,
    name: 'Labels'
  },
  {
    cell: (row) => row.created,
    grow: 1,
    name: 'Created',
    width: '160px'
  },
  {
    cell: (row) => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="px-50 py-25"
            variant="outline-primary"
            onClick={() => detailServiceAccounts(row.id)}
          >
            <Eye size={16} />
          </Button>
          <Button
            className="px-50 py-25"
            variant="outline-primary"
            onClick={() => editServiceAccounts(row.id)}
          >
            <Edit2 fill="white" size={16} />
          </Button>
        </div>
      );
    },
    name: 'Action',
    width: '200px'
  }
];

export { columns };
