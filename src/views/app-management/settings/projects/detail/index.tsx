import { Tab, Tabs } from 'react-bootstrap';

import ProjectsEvents from './components/events';
import ProjectsRoles from './components/roles';
import ProjectsSummary from './components/summary';
import ProjectsWindows from './components/windows';

const ProjectsDetailMain = () => {
  return (
    <div className="element-wrapper">
      <div>
        <h4 className="fw-bold p-2 mt-1 text-black">Default.</h4>
        <div className="m-2">
          <Tabs
            className="border-bottom m-0"
            defaultActiveKey="summary"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="summary" title="Summary">
              <ProjectsSummary />
            </Tab>
            <Tab eventKey="roles" title="Roles">
              <ProjectsRoles />
            </Tab>
            <Tab eventKey="windows" title="Windows">
              <ProjectsWindows />
            </Tab>
            <Tab eventKey="events" title="Events">
              <ProjectsEvents />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

ProjectsDetailMain.displayName = 'ProjectsDetailMain';
export { ProjectsDetailMain };
