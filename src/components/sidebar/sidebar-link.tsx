import { useEffect, useMemo } from 'react';
import { Badge } from 'react-bootstrap';
import { matchPath, NavLink, useLocation, useParams } from 'react-router-dom';

import { classNames } from '@nxweb/core/strings';

import { NavigationConfig } from '@config/navigation/index';
import type { CustomRouteType } from '@config/routes';
import { RouteConfig } from '@config/routes';
import type { NavigationLink } from '@layouts/types';

import { getAllParents, interpolateParams, isNavLinkActive, search } from './utils';

interface SidebarLinkProps {
  item: NavigationLink

  activeItem?: string
  currentActiveItem?: string
  parentItem?: Record<string, unknown>

  setActiveItem: (activeItem?: string) => void
  setGroupActive: (groups: string[]) => void
  setGroupOpen: (groups: string[]) => void
  toggleActiveGroup: (activeItem?: string, parents?: { id: string }) => void

  routerProps?: unknown
}

const SidebarLink = ({
  item,

  activeItem,
  currentActiveItem,
  parentItem,

  setActiveItem,
  setGroupActive,
  setGroupOpen,
  toggleActiveGroup,

  routerProps

}: SidebarLinkProps) => {
  const params = useParams();

  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  const LinkTag = item.externalLink ? 'a' : NavLink;

  // ** URL Vars
  const location = useLocation();
  const currentURL = location.pathname;

  // @ts-expect-error: o as unknown
  const navigation = NavigationConfig.filter((o: unknown) => !!(o as unknown).id) as NavigationLink[];
  const navLinkActive = item.navLink && isNavLinkActive(item.navLink, currentURL, routerProps, { ...params });

  // ** To match path
  const match = matchPath(currentURL, `${item.navLink}/:param`);

  // ** Search for current item parents
  const searchParents = (currentURL: string) => {
    const parents = search(navigation, currentURL, routerProps); // Search for parent object
    const allParents = getAllParents(parents || [], 'id'); // Parents Object to Parents Array

    return allParents;
  };

  // ** URL Vars
  const resetActiveGroup = (navLink: string) => {
    const parents = search(navigation, navLink, match);

    toggleActiveGroup(item.id, parents);
  };

  // ** Reset Active & Open Group Arrays
  const resetActiveAndOpenGroups = () => {
    setGroupActive([]);
    setGroupOpen([]);
  };

  // ** Checks url & updates active item
  useEffect(() => {
    if (currentActiveItem !== null) {
      setActiveItem(currentActiveItem);
      const arr = searchParents(currentURL);

      setGroupActive([...arr]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const navId = useMemo(() => {
    const navItem = RouteConfig.filter((route: CustomRouteType) => {
      const match = matchPath(route.path, currentURL);

      if (match?.pathname) {
        return route;
      }

      return false;
    });

    return navItem[0]?.meta?.navId;
  }, [currentURL]);

  return (
    <li
      className={classNames({
        'nav-item': !item.children,
        disabled: item.disabled,
        active: item.navLink === activeItem || navLinkActive || (item.id === navId)
      })}
    >
      <LinkTag
        className="d-flex align-items-center"
        target={item.externalLink ? '_blank' : undefined}
        /*eslint-disable */
        {...(item.externalLink === true
          ? {
            href: interpolateParams(item.navLink || '', { ...params }) || '/',
            to: ''
          }
          : {
            to: interpolateParams(item.navLink || '', { ...params }) || '/',
            end: true
          })
        }
        /* eslint-enable */
        onClick={(e) => {
          if (!item.navLink) {
            e.preventDefault();
          }

          item.navLink && parentItem ? resetActiveGroup(item.navLink) : resetActiveAndOpenGroups();
        }}
      >
        {item.icon}
        <span className="menu-item text-truncate" title={item.title}>{item.text || item.title}</span>

        {item.badge && item.badgeText
          ? (
            <Badge className="ms-auto me-1" color={item.badge} pill={true}>
              {item.badgeText}
            </Badge>
          )
          : null}
      </LinkTag>
    </li>
  );
};

SidebarLink.displayName = 'SidebarLink';
export { SidebarLink };
export type { SidebarLinkProps };
