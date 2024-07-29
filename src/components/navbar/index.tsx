import type { FC } from 'react';

import { NavbarUser } from './navbar-user';

interface NavbarProps {
  setMenuVisibility?: (visible: boolean) => void
}

const Navbar: FC<NavbarProps> = ({
  setMenuVisibility
}) => {
  return (
    <NavbarUser setMenuVisibility={setMenuVisibility} />
  );
};

Navbar.displayName = 'Navbar';

export { Navbar };
