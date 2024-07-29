import { Button } from 'react-bootstrap';
import type { TableColumn } from 'react-data-table-component';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { StopCircleFill } from '@nxweb/icons/bootstrap';
import { Edit2 } from '@nxweb/icons/feather';

import type { APIGatewayDataModel } from '@models/app/settings/nextAPI/api-gateway/types';

const columns = (
  toggleModal: (type?: 'Add' | 'Edit' | 'Update' | 'XDS') => void
): TableColumn<APIGatewayDataModel>[] => [
  {
    cell: (row) => row.name,
    grow: 1,
    name: 'Name'
  },
  {
    cell: (row) => row.display,
    grow: 1,
    name: 'Display'
  },
  {
    cell: (row) => row.ports,
    grow: 1,
    name: 'Ports'
  },
  {
    cell: (row) => {
      return (
        <div
          className={classNames(
            'round d-flex align-items-center gap-25 px-75 py-25 bg-light-success text-success border-success'
          )}
        >
          <div className="text-body-3 fw-bold text-success">{row.status}</div>
        </div>
      );
    },
    name: 'Status',
    width: '130px'
  },
  {
    cell: (row) => row.baseURL,
    grow: 1,
    name: 'Base URL'
  },
  {
    cell: () => {
      return (
        <div className="d-flex align-items-center gap-75">
          <Button
            className="px-50 py-25"
            data-placement="top"
            data-toggle="tooltip"
            title="View XDS"
            variant="outline-primary"
            onClick={() => toggleModal('XDS')}
          >
            <svg
              fill="none"
              height="14"
              viewBox="0 0 12 14"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33073 0.339844H1.9974C1.64477 0.341079 1.30703 0.482164 1.05831 0.732136C0.809589 0.982108 0.670199 1.32055 0.670731 1.67318L0.664064 12.3398C0.663532 12.6925 0.802922 13.0309 1.05164 13.2809C1.30037 13.5309 1.6381 13.6719 1.99073 13.6732H9.9974C10.3507 13.6721 10.6892 13.5313 10.939 13.2815C11.1889 13.0317 11.3297 12.6931 11.3307 12.3398V4.33984L7.33073 0.339844ZM7.90606 10.3118L7.30606 11.3498C7.28724 11.3804 7.25853 11.4036 7.2247 11.4156C7.19087 11.4276 7.15394 11.4277 7.12006 11.4158L6.37006 11.1158C6.2157 11.2354 6.04624 11.334 5.86606 11.4092L5.75273 12.2018C5.74621 12.2371 5.7276 12.269 5.70009 12.292C5.67259 12.315 5.63792 12.3277 5.60206 12.3278H4.40206C4.36598 12.3284 4.3309 12.3159 4.30332 12.2926C4.27575 12.2693 4.25754 12.2369 4.25206 12.2012L4.13873 11.4098C3.95526 11.3369 3.78326 11.2379 3.62806 11.1158L2.88406 11.4158C2.8502 11.4287 2.81286 11.4291 2.77875 11.4169C2.74465 11.4046 2.71604 11.3806 2.69806 11.3492L2.09806 10.3118C2.08131 10.2805 2.07575 10.2444 2.08229 10.2095C2.08884 10.1746 2.1071 10.143 2.13406 10.1198L2.77006 9.62184C2.74608 9.42658 2.74608 9.22911 2.77006 9.03384L2.13406 8.53584C2.10589 8.51358 2.08672 8.48188 2.0801 8.44659C2.07349 8.41129 2.07987 8.3748 2.09806 8.34384L2.69806 7.30584C2.71681 7.27501 2.74559 7.25156 2.77958 7.23942C2.81356 7.22728 2.85069 7.2272 2.88473 7.23918L3.62806 7.53918C3.78536 7.42081 3.95666 7.32229 4.13806 7.24584L4.25206 6.45384C4.25842 6.41858 4.27688 6.38663 4.30426 6.36351C4.33164 6.34039 4.36623 6.32754 4.40206 6.32718H5.60206C5.63747 6.32677 5.67178 6.33949 5.69837 6.36288C5.72496 6.38627 5.74195 6.41867 5.74606 6.45384L5.86006 7.24584C6.04327 7.31862 6.21504 7.41741 6.37006 7.53918L7.11406 7.23918C7.14801 7.22612 7.18551 7.22567 7.21976 7.2379C7.25401 7.25013 7.28274 7.27424 7.30073 7.30584L7.90073 8.34384C7.91741 8.37523 7.92287 8.41138 7.9162 8.4463C7.90953 8.48121 7.89114 8.51281 7.86406 8.53584L7.22806 9.03384C7.24518 9.13066 7.25322 9.22886 7.25206 9.32718C7.25031 9.42581 7.24229 9.52423 7.22806 9.62184L7.87006 10.1198C7.89703 10.143 7.91529 10.1746 7.92184 10.2095C7.92838 10.2444 7.92282 10.2805 7.90606 10.3118ZM6.66406 5.00651V1.33984L10.3307 5.00651H6.66406Z"
                fill="#4F7899" />
            </svg>
          </Button>

          <Button
            className="px-50 py-25"
            data-placement="top"
            data-toggle="tooltip"
            title="Edit API Gateway"
            onClick={() => toggleModal('Edit')}
          >
            <Edit2 size={16} />
          </Button>

          <Button
            className="px-50 py-25"
            data-placement="top"
            data-toggle="tooltip"
            title="Update API Gateway"
            variant="danger"
            onClick={() => toggleModal('Update')}
          >
            <StopCircleFill size={14} />
          </Button>
        </div>
      );
    },
    name: 'Action',
    width: '160px'
  }
];

export { columns };
