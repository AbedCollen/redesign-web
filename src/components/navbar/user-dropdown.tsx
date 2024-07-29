import { useEffect, useMemo } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { useAuth } from '@nxweb/auth';
import { Power } from '@nxweb/icons/feather';

import { Avatar } from '@components/avatar';
import type { AuthAction } from '@models/auth/types';
import { StoreCommand } from '@models/store';
import type { TDispatch } from '@models/types';

const UserDropdown = () => {
  const dispatch = useDispatch<TDispatch<AuthAction>>();
  const auth = useAuth();
  const user = useMemo(() => auth.data?.user, [auth]);
  const loggedIn = auth.data?.loggedIn;

  useEffect(() => {
    dispatch(StoreCommand.auth.setUserToken(auth.data?.token?.authorization || ''));
  }, [dispatch, auth]);

  return (
    <Dropdown as="li" className="dropdown-user nav-item">
      <Dropdown.Toggle as="a" className="nav-link dropdown-user-link">
        {user?.picture
          ? <Avatar img={user.picture} imgHeight="40" imgWidth="40" />
          : <Avatar color="light-secondary" content={user?.name || 'Guest User'} initials={true} />}
        <div className="user-nav d-sm-flex d-none">
          <span className="text-body-1 fw-medium">{user?.name || 'Guest User'}</span>
          {/* <span className="user-status">{user?.email}</span> */}
        </div>
      </Dropdown.Toggle>
      {loggedIn
        ? <Dropdown.Menu align="end">
          <Dropdown.Item eventKey="logout" onClick={() => auth.logout()}>
            <Power className="me-75" size={14} />
            <span className="align-middle">Logout</span>
          </Dropdown.Item>
          </Dropdown.Menu>
        : null}
    </Dropdown>
  );
};

UserDropdown.displayName = 'UserDropdown';

export { UserDropdown };
