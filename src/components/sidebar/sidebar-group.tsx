import { useMemo } from 'react';
import type { MouseEvent } from 'react';
import { Badge, Collapse } from 'react-bootstrap';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { classNames } from '@nxweb/core/strings';

import type { CustomRouteType } from '@config/routes';
import { RouteConfig } from '@config/routes';
import type { NavigationLink } from '@layouts/types';

import { SidebarItems } from './sidebar-items';
import { getAllParents, isNavGroupActive } from './utils';

interface SidebarGroupProps {
  activeItem?: string
  currentActiveItem?: string
  groupActive: string[]
  groupOpen: string[]
  item: NavigationLink

  menuCollapsed: boolean
  menuHover: boolean
  parentItem?: Record<string, unknown>
  routerProps: Record<string, Record<string, string>>

  setActiveItem: (activeItem?: string) => void
  setGroupActive: (groups: string[]) => void
  setGroupOpen: (groups: string[]) => void

}

const SidebarGroup = ({
  item,
  activeItem,
  currentActiveItem,
  parentItem,

  groupActive,
  groupOpen,

  setActiveItem,
  setGroupActive,
  setGroupOpen,

  menuCollapsed,
  menuHover,
  routerProps
}: SidebarGroupProps) => {
  const currentURL = useLocation().pathname;

  const toggleOpenGroup = (item: string, parentItem?: Record<string, unknown>) => {
    let openArr = groupOpen;
    let allParents = undefined;

    if (parentItem) {
      allParents = getAllParents(parentItem, 'id');
      allParents.pop();
    }

    // ** If user clicked on menu group inside already opened group i.g. when user click on blog group inside pages group
    if (groupOpen && allParents && groupOpen[0] === allParents[0]) {
      groupOpen.includes(item) ? openArr.splice(openArr.indexOf(item), 1) : openArr.push(item);
    } else {
      openArr = [];

      if (!groupOpen.includes(item)) {
        openArr.push(item);
      }
    }

    // ** Set Open Group
    setGroupOpen([...openArr]);
  };

  const toggleActiveGroup = (item: string | unknown, parentItem?: Record<string, unknown>) => {
    let activeArr = groupActive;
    let allParents = undefined;

    if (parentItem) {
      allParents = getAllParents(parentItem, 'id');
      activeArr = allParents;
    } else if (typeof item === 'string') {
      activeArr.includes(item) ? activeArr.splice(activeArr.indexOf(item), 1) : activeArr.push(item);
    }

    // ** Set open group removing any activegroup item present in opengroup state
    const openArr = groupOpen.filter((val) => !activeArr.includes(val));

    setGroupOpen([...openArr]);

    // **  Set Active Group
    setGroupActive([...activeArr]);
  };

  const onCollapseClick = (e: MouseEvent<HTMLAnchorElement>, item: NavigationLink) => {
    if ((groupActive && groupActive.includes(item.id)) || (item.children && isNavGroupActive(item.children, currentURL, routerProps))) {
      toggleActiveGroup(item.id);
    } else {
      toggleOpenGroup(item.id, parentItem);
    }

    e.preventDefault();
  };

  const openClassCondition = (id: string) => {
    if ((menuCollapsed && menuHover) || menuCollapsed === false) {
      if (groupActive.includes(id) || groupOpen.includes(item.id)) {
        return true;
      }
    } else if (groupActive.includes(id) && menuCollapsed && menuHover === false) {
      return false;
    } else {
      return null;
    }
  };

  const navMeta = useMemo(() => {
    const navItem = RouteConfig.filter((route: CustomRouteType) => {
      const match = matchPath(route.path, currentURL);

      if (match?.pathname) {
        return route;
      }

      return false;
    });

    return navItem[0]?.meta;
  }, [currentURL]);

  return (
    <li
      className={classNames('nav-item has-sub', {
        'menu-collapsed-open': groupActive.includes(item.id) || item.id === navMeta?.groupId,
        open: openClassCondition(item.id) || item.id === navMeta?.groupId,
        'sidebar-group-active': groupActive.includes(item.id) || groupOpen.includes(item.id) || item.id === navMeta?.groupId
      })}
    >
      <Link className="d-flex align-items-center" to="/" onClick={(e) => onCollapseClick(e, item)}>
        {item.icon}
        <span className="menu-title text-truncate" title={item.title || item.text}>{item.text}</span>

        {item.badge && item.badgeText
          ? (
            <Badge className="ms-auto me-1" color={item.badge} pill={true}>
              {item.badgeText}
            </Badge>
          )
          : null}
      </Link>

      {/* Render Child Recursively Through SidebarItems Component */}
      <ul className="menu-content">
        <Collapse in={(groupActive && groupActive.includes(item.id)) || (groupOpen && groupOpen.includes(item.id)) || item.id === navMeta?.groupId}>
          <div>
            <SidebarItems
              activeItem={activeItem}
              currentActiveItem={currentActiveItem}
              groupActive={groupActive}
              groupOpen={groupOpen}
              items={item.children}
              menuCollapsed={menuCollapsed}
              menuHover={menuHover}
              parentItem={item}
              routerProps={routerProps}
              setActiveItem={setActiveItem}
              setGroupActive={setGroupActive}
              setGroupOpen={setGroupOpen}
              toggleActiveGroup={toggleActiveGroup} />
          </div>
        </Collapse>
      </ul>
    </li>
  );
};

SidebarGroup.displayName = 'SidebarGroup';

export { SidebarGroup };
export type { SidebarGroupProps };
