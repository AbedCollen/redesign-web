import type { FC } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { X } from '@nxweb/icons/feather';

import { IconChevronsLeftWhite } from '@components/icon';
import { AppConfig } from '@config/app';
import { useLayout } from '@layouts/provider';

interface SidebarHeaderProps {
  menuHover?: boolean
  setGroupOpen?: (val: Record<string, unknown>[]) => void
}

interface SidebarTogglerProps {
  collapsed: boolean
  onToggle: (collapse: boolean) => void
}

const SidebarToggler: FC<SidebarTogglerProps> = ({ collapsed, onToggle }) => {
  return collapsed
    ? <IconChevronsLeftWhite
        className="toggle-icon rotate-180"
        data-tour="toggle-icon"
        size={24}
        onClick={() => onToggle(false)} />
    : <IconChevronsLeftWhite
        className="toggle-icon"
        data-tour="toggle-icon"
        onClick={() => onToggle(true)} />;
};

const SidebarHeader: FC<SidebarHeaderProps> = ({
  menuHover,
  setGroupOpen
}) => {
  const layout = useLayout();
  const { menuCollapsed, collapseMenu, hideMenu } = layout;

  useEffect(() => {
    if (!menuHover && menuCollapsed) { setGroupOpen && setGroupOpen([]); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuHover, menuCollapsed]);

  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item me-auto">
          <NavLink className="navbar-brand" to={AppConfig.url}>
            <span className="brand-logo">
              <img alt="logo" src={menuCollapsed ? AppConfig.logo : AppConfig.logoGreyText} width="100%" />
            </span>
          </NavLink>
        </li>
        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle cursor-pointer">
            <SidebarToggler collapsed={menuCollapsed} onToggle={collapseMenu} />
            <X className="toggle-icon icon-x d-block d-xl-none" size={20} onClick={() => hideMenu(true)} />
          </div>
        </li>
      </ul>
    </div>
  );
};

SidebarToggler.displayName = 'SidebarToggler';
SidebarHeader.displayName = 'SidebarHeader';

export { SidebarHeader };
