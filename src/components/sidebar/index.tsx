import type { FC, ReactNode } from 'react';
import { useRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useLocation } from 'react-router-dom';

import { classNames } from '@nxweb/core/strings';

import { NavigationConfig } from '@config/navigation';
import { useLayout } from '@layouts/provider';

import { SidebarHeader } from './sidebar-header';
import { SidebarItems } from './sidebar-items';

interface SidebarProps {
  readonly currentActiveItem?: unknown
  readonly menu?: ReactNode
  readonly routerProps?: unknown
}

const Sidebar: FC<SidebarProps> = ({
  menu, routerProps, currentActiveItem
}) => {
  const [groupOpen, setGroupOpen] = useState<unknown[]>([]);
  const [groupActive, setGroupActive] = useState<Record<string, unknown>[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false);

  // ** Ref
  const shadowRef = useRef<HTMLDivElement>(null);

  const layout = useLayout();
  const { scheme, menuCollapsed } = layout;

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    if (menuCollapsed) {
      setMenuHover(true);
    }
  };

  // ** Scroll Menu
  const scrollMenu = (container: HTMLElement): void => {
    if (!shadowRef.current) return;

    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.add('d-block');
      }
    } else if (shadowRef.current.classList.contains('d-block')) {
      shadowRef.current.classList.remove('d-block');
    }
  };
  const location = useLocation();

  if (location.pathname !== '/project-management/projects') {
    return (
    <div
      className={classNames('main-menu menu-fixed menu-accordion menu-dark menu-shadow', {
        expanded: menuCollapsed === false,
        'menu-light': scheme !== 'semi-dark' && scheme !== 'dark',
        'menu-dark': scheme === 'semi-dark' || scheme === 'dark'
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setMenuHover(false)}
    >
      {
        menu || (
          <>
            <SidebarHeader menuHover={menuHover} setGroupOpen={setGroupOpen} />
            <div className="header-border" />
            {/* <div className="shadow-bottom" ref={shadowRef} /> */}
            <PerfectScrollbar
              className="main-menu-content"
              options={{ wheelPropagation: false }}
              onScrollY={scrollMenu}
            >
              <ul className="navigation navigation-main">
                <SidebarItems
                  activeItem={activeItem}
                  currentActiveItem={currentActiveItem}
                  groupActive={groupActive}
                  groupOpen={groupOpen}

                  // @ts-expect-error: Type 'NavigationConfig' is not assignable to type 'NavigationLink[]'
                  items={NavigationConfig}
                  menuCollapsed={menuCollapsed}
                  menuHover={menuHover}
                  routerProps={routerProps}
                  setActiveItem={setActiveItem}
                  setGroupActive={setGroupActive}
                  setGroupOpen={setGroupOpen} />
              </ul>
            </PerfectScrollbar>
          </>
        )
      }
    </div>
    );
  }
};

Sidebar.displayName = 'Sidebar';
export { Sidebar };
