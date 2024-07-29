/* eslint-disable react/jsx-key */
import type { FC } from 'react';
import { Fragment, useEffect, useMemo } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import type { Location } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { ChevronDown, ChevronRight } from '@nxweb/icons/feather';

import { IconIoT, IconSwitchAPI } from '@components/icon';
import { NavigationConfig } from '@config/navigation/index';
import { RouteConfig } from '@config/routes';
import type { NavigationLink } from '@layouts/types';
import { StoreCommand, useStore } from '@models/store';
import { MENU_OPTIONS } from '@views/landing';

interface NavbarBreadcrumbsProps {
  [key: string]: unknown
  readonly className?: string
}

const simpleNav: NavigationLink[] = JSON.parse(
  JSON.stringify(NavigationConfig)
)?.flat();

const MENU_SIZE = 20;

const getIcon = (lbl: string) => {
  const menu = MENU_OPTIONS.find((o) => o.meta === lbl);

  if (menu) {
    return <div className="me-50">{menu.icon(MENU_SIZE)}</div>;
  }

  return null;
};

const hasBreadcrumbs = (idx: number, location: Location) => {
  const route = RouteConfig.find((o) => o.path === location.pathname);

  if (route?.breadcrumbs && route?.breadcrumbs?.length > 0) {
    return route?.breadcrumbs[idx];
  }

  return null;
};

const hasIoTDemo = (location: Location) => {
  const route = RouteConfig.find((o) => o.path === location.pathname);

  return route?.IoTDemo;
};

const NavbarBreadcrumbs: FC<NavbarBreadcrumbsProps> = (props) => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.projectManagement?.projects?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.projectManagement.projects.GetMainData());
  }, [dispatch]);

  const { className, ...rest } = props;
  const location = useLocation();
  const locationArr = useMemo(() => {
    return location.pathname.split('/').slice(1);
  }, [location]);
  let locationDest = ``;

  return (
    <div className={classNames('navbar-breadcrumbs', className)} {...rest}>
      {location.pathname.split('/')[1] === 'project-management' && location.pathname !== '/project-management/projects'
        ? <InputGroup className="navbar-api-dropdown">
          <InputGroup.Text>
            <IconSwitchAPI />
          </InputGroup.Text>
          <Form.Select>
            {store?.data.map((project) => {
              return (
                <option>{project.name}</option>
              );
            })}
          </Form.Select>
          </InputGroup>
        : null}
      {locationArr.map((txt, idx) => {
        locationDest = `${locationDest}/${txt}`;

        return (
          <Fragment key={txt}>
            {idx === 0 && hasIoTDemo(location) === true
              ? (
              <>
                <IconIoT size={20} />
                <span className="ms-1 me-3 text-body-2 fw-medium text-capitalize text-truncate text-neutral-90">
                  V 0.1 IoT Demo
                </span>
                <ChevronDown
                  className="text-neutral-90 breadcrumb-chevron"
                  size={16} />
                <div className="vertical-line" />
              </>
              )
              : null}
            {idx === 0 && hasIoTDemo(location) !== true ? getIcon(txt) : null}
              {idx === locationArr.length - 1 || RouteConfig.find((o) => o.path === locationDest) === undefined
                ? <div
                    className={classNames(
                      'text-body-2 fw-medium text-capitalize text-truncate',
                      {
                        'text-info': idx === locationArr.length - 1,
                        'text-neutral-90': idx !== locationArr.length - 1
                      }
                    )}
                  >
              {idx === 0
                ? MENU_OPTIONS.find((x) => x.meta === txt)?.label || txt
                : hasBreadcrumbs(idx, location) ||
                  simpleNav?.find((x) => x.navLink === location.pathname)
                    ?.text ||
                  txt.split('-').join(' ')}
                  </div>
                : <a
                    className={classNames(
                      'text-body-2 fw-medium text-capitalize text-truncate',
                      {
                        'text-info': idx === locationArr.length - 1,
                        'text-neutral-90': idx !== locationArr.length - 1
                      }
                    )}
                    href={locationDest}
                  >
              {idx === 0
                ? MENU_OPTIONS.find((x) => x.meta === txt)?.label || txt
                : hasBreadcrumbs(idx, location) ||
                  simpleNav?.find((x) => x.navLink === location.pathname)
                    ?.text ||
                  txt.split('-').join(' ')}
                  </a>}

            {idx !== locationArr.length - 1
              ? (
              <ChevronRight
                className="text-neutral-90 breadcrumb-chevron"
                size={16} />
              )
              : null}
          </Fragment>
        );
      })}
    </div>
  );
};

NavbarBreadcrumbs.displayName = 'NavbarBreadcrumbs';

export { NavbarBreadcrumbs };
