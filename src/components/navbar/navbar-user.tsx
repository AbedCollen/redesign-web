import type { FC } from 'react';
import { useCallback, useMemo } from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Bell, ChevronLeft } from '@nxweb/icons/feather';

import { RouteConfig } from '@config/routes';

import { NavbarBreadcrumbs } from './navbar-breadcrumbs';
import { UserDropdown } from './user-dropdown';

interface NavbarUserProps {
  setMenuVisibility?: (visible: boolean) => void
}

const NavbarUser: FC<NavbarUserProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationArr = useMemo(() => location.pathname.split('/'), [location]);
  const params = useParams();

  const navigateBack = useCallback(() => {
    const startIdx = locationArr.length - 1;
    const parsedParams = Object.keys(params).map((key) => ({ key, value: params[key] }));
    const modLocationArr = [...locationArr];

    if (parsedParams.length) {
      for (const i of parsedParams) {
        const idxParam = modLocationArr.findIndex((o) => o === i.value);

        modLocationArr[idxParam] = `:${i.key}`;
      }
    }

    const traversePath = (idx: number) => {
      const actualPath = locationArr.slice(0, idx).join('/');
      const newPath = modLocationArr.slice(0, idx).join('/');
      const findNav = RouteConfig.find((o) => o.path === newPath);

      if (findNav?.path) {
        navigate(actualPath);
      } else if (idx === 0) {
        navigate('/');
      } else {
        traversePath(idx - 1);
      }
    };

    traversePath(startIdx);
  }, []);

  return (
    <>
      <div className="bookmark-wrapper d-flex align-items-center flex-grow-1 me-2">
        <Nav.Item className="me-75">
          <Nav.Link className="text-neutral-90 nav-link-style p-50" onClick={navigateBack}>
            <ChevronLeft size={24} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-100">
          <NavbarBreadcrumbs />
        </Nav.Item>
      </div>
      <ul className="nav navbar-nav align-items-center flex-nowrap">
        <Nav.Item>
          <Nav.Link>
            <Bell className="text-neutral-90" size={24} />
          </Nav.Link>
        </Nav.Item>
        <UserDropdown />
      </ul>
    </>
  );
};

NavbarUser.displayName = 'NavbarUser';

export { NavbarUser };
export type { NavbarUserProps };
