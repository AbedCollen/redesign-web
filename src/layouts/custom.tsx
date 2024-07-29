import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { classNames } from '@nxweb/core/strings';
import { ArrowUP } from '@nxweb/icons/bootstrap';

import { Navbar as NavbarComponent } from '@components/navbar';
import { ScrollTop } from '@components/scroll-top';

import { useLayout } from './provider';

type CustomLayoutProps = PropsWithChildren<{
  className?: string
  currentActiveItem: unknown
  footer?: ReactNode
  menu?: ReactNode
  navbar?: ReactNode

  routerProps: unknown
}>;

const DEFAULT_WIDTH = 1200;

const CustomLayout: FC<CustomLayoutProps> = ({
  footer,
  navbar,
  children
}) => {
  const location = useLocation();
  const layout = useLayout();
  const { windowWidth } = layout;
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
    <>
      <Navbar
        className={classNames(`header-navbar navbar align-items-center navbar-shadow`)}
        expand="lg"
      >
        <div className="navbar-container d-flex content">
          {navbar || <NavbarComponent setMenuVisibility={setMenuVisibility} />}
        </div>
      </Navbar>

      <div className={classNames('app-content')}>
        {children}
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
    </>
  );
};

CustomLayout.displayName = 'CustomLayout';
export { CustomLayout };
