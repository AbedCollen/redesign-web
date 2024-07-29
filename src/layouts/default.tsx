import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { classNames } from '@nxweb/core/strings';
import { ArrowUP } from '@nxweb/icons/bootstrap';

import { Navbar as NavbarComponent } from '@components/navbar';
import { ScrollTop } from '@components/scroll-top';
import { Sidebar as SidebarComponent } from '@components/sidebar';

import { useLayout } from './provider';

type DefaultLayoutProps = PropsWithChildren<{
  readonly className?: string
  readonly currentActiveItem: unknown
  readonly footer?: ReactNode
  readonly menu?: ReactNode
  readonly navbar?: ReactNode

  readonly routerProps: unknown
}>;

const DEFAULT_WIDTH = 1200;

const DefaultLayout: FC<DefaultLayoutProps> = ({
  className,
  footer,
  navbar,
  menu,
  routerProps,
  currentActiveItem,
  children
}) => {
  const location = useLocation();
  const layout = useLayout();
  const { windowWidth, menuCollapsed, menuHidden, transition } = layout;
  const [menuVisibility, setMenuVisibility] = useState(false);

  useEffect(() => {
    if (menuVisibility && windowWidth < DEFAULT_WIDTH) {
      setMenuVisibility(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const resizeWindow = () => layout?.updateWindowWidth();

    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classNames(
        className,
        `wrapper vertical-layout navbar-floating footer-hidden`,
        {
          // Modern Menu
          'menu-collapsed': menuCollapsed && windowWidth >= DEFAULT_WIDTH,
          'menu-expanded': !menuCollapsed && windowWidth > DEFAULT_WIDTH,
          'vertical-menu-modern': windowWidth >= DEFAULT_WIDTH,

          // Overlay Menu
          'menu-hidden': !menuVisibility && windowWidth < DEFAULT_WIDTH,
          'menu-open': menuVisibility && windowWidth < DEFAULT_WIDTH,
          'vertical-overlay-menu': windowWidth < DEFAULT_WIDTH
        }
      )}
      {...(menuHidden ? { 'data-col': '1-column' } : {})}
    >
      {!menuHidden
        ? (
        <SidebarComponent
          currentActiveItem={currentActiveItem}
          menu={menu}
          routerProps={routerProps} />
        )
        : null}

      <Navbar
        className={classNames(`header-navbar navbar align-items-center floating-nav navbar-shadow ${location.pathname === '/project-management/projects' ? 'w-100' : null}`)}
        expand="lg"
      >
        <div className="navbar-container d-flex content">
          {navbar || <NavbarComponent setMenuVisibility={setMenuVisibility} />}
        </div>
      </Navbar>

      <div className={classNames(`app-content ${location.pathname === '/project-management/projects' ? 'ms-0' : null} content overflow-hidden`)}>
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div
          className={classNames('content-wrapper', {
            [`animate__animated animate__${transition}`]: transition !== 'none' && transition.length
          })}
        >
          {children}
        </div>
      </div>

      {/* Vertical Nav Menu Overlay */}
      <div
        className={classNames('sidenav-overlay', {
          show: menuVisibility
        })}
        onClick={() => setMenuVisibility(false)} />
      {/* Vertical Nav Menu Overlay */}

      <footer className={classNames(`footer footer-light footer-hidden d-none`)}>
        {footer || null}
      </footer>

      {layout.scrollTop
        ? (
        <ScrollTop className="scroll-top d-block" showOffset={300}>
          <Button className="btn-icon" color="primary">
            <ArrowUP size={14} />
          </Button>
        </ScrollTop>
        )
        : null}
    </div>
  );
};

DefaultLayout.displayName = 'DefaultLayout';
export { DefaultLayout };
