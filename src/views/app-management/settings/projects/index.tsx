import { useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { Plus } from '@nxweb/icons/feather';

import { CustomDataTable } from '@components/custom';
import { allRoutes } from '@config/constants';
import { StoreCommand, useStore } from '@models/store';

import { columns } from './columns';

const ProjectsMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.appManagement?.projects?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.appManagement.projects.GetMainData());
  }, [dispatch]);

  const navigate = useNavigate();
  const projectsDetail = (id: number) => {
    navigate(`./detail/${id}`);
  };

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold text-black mt-1">Projects</h4>

      <div className="border rounded p-2 mt-3">
        <Col className="d-flex justify-content-end gap-50 mb-2">
          <Button
            className="d-flex align-items-center justify-content-center gap-50"
            href={allRoutes.appManagement.settingAddProjects}
          >
            <Plus size={20} /> Project
          </Button>
        </Col>
        <Col>
          <CustomDataTable
            columns={columns(projectsDetail)}
            data={store?.data || []}
            totalRows={store?.total} />
        </Col>
      </div>
    </div>
  );
};

ProjectsMain.displayName = 'ProjectsMain';

export { ProjectsMain };
