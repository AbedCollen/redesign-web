import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomDataTable } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const UserManagementMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.userManagement?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.userManagement.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const userManagementDetail = (id: number) => {
    navigate(`./detail/${id}`);
  };

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold text-black mt-1">User Management</h4>

      <div className="border rounded p-2 mt-3">
        <CustomDataTable
          columns={columns(userManagementDetail)}
          data={store?.data || []}
          totalRows={store?.total} />
      </div>
    </div>
  );
};

UserManagementMain.displayName = 'UserManagementMain';

export { UserManagementMain };
