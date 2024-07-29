import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  IconApiManagement,
  IconBusinessRules,
  IconDashboard,
  IconGrid,
  IconLog,
  IconMonitoringAndAlerting,
  IconSDK,
  IconSettings,
  IconUserAndRoles
} from '@components/icon';
import { UserDropdown } from '@components/navbar/user-dropdown';
import { allRoutes } from '@config/constants';

import Logo from '@assets/logo-grey-text.svg';

const MENU_OPTIONS = [
  {
    icon: (size?: number) => <IconDashboard size={size || undefined} />,
    label: 'Cluster Management',
    meta: 'cluster-management',
    to: allRoutes.clusterManagement.dashboard
  },
  {
    icon: (size?: number) => <IconApiManagement size={size || undefined} />,
    label: 'Projects',
    meta: 'projects',
    to: allRoutes.projectManagement.projects
  },
  {
    icon: (size?: number) => <IconSDK size={size || undefined} />,
    label: 'App Management',
    meta: 'app-management',
    to: allRoutes.appManagement.dashboard
  },
  {
    icon: (size?: number) => <IconLog size={size || undefined} />,
    label: 'Logs',
    meta: 'logs',
    to: allRoutes.logs.searching
  },
  {
    icon: (size?: number) => <IconBusinessRules size={size || undefined} />,
    label: 'Distribution Tracing',
    meta: 'distribution-tracing',
    to: allRoutes.distributionTracing.service
  },
  {
    icon: (size?: number) => <IconMonitoringAndAlerting size={size || undefined} />,
    label: 'Monitoring and Alerting',
    meta: 'Monitoring and Alerting',
    to: allRoutes.monitoringAlerting.monitoringGraph
  },
  {
    icon: (size?: number) => <IconUserAndRoles size={size || undefined} />,
    label: 'Users and Roles',
    meta: 'Users and Roles',
    to: allRoutes.userAndRoles.users
  },
  {
    icon: (size?: number) => <IconSettings size={size || undefined} />,
    label: 'Settings',
    meta: 'settings',
    to: allRoutes.settings.retention
  }
];

const Landing = () => {
  return (
    <div id="landing-page">
      <div className="header">
        <img alt="" src={Logo} />
        <div className="d-flex align-items-center">
          <div className="p-50 me-1">
            <IconGrid />
          </div>
          <UserDropdown />
        </div>
      </div>
      <div className="content">
        <Row>
          <Col className="mx-auto" xs={7}>
            <Card>
              <Card.Body>
                <h2 className="mb-75 fw-bold text-black text-center">
                  Welcome to NEXTCLUSTER
                </h2>
                <div className="text-body-1 text-neutral-70 text-center">
                  Container Management and Monitoring Platform
                </div>

                <div className="menu-list">
                  <Row className="gx-0">
                    {MENU_OPTIONS.map((o) => {
                      return (
                        <Col
                          as={Link}
                          className="h-auto"
                          key={o.label}
                          to={o?.to || '#'}
                          xs={3}
                        >
                          {o.icon ? o.icon() : null}
                          <div className="menu-text fw-medium text-center">
                            {o.label}
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

Landing.displayName = 'Landing';
export { Landing, MENU_OPTIONS };
