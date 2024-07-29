import { MoreHorizontal } from '@nxweb/icons/feather';

import type { NavigationHeader } from '@layouts/types';

export interface SidebarSectionProps {
  item: NavigationHeader
}

export const SidebarSection = ({ item }: SidebarSectionProps) => {
  return (
    <li className="navigation-header">
      <span>{item.header}</span>
      <MoreHorizontal className="more-horizontal" />
    </li>
  );
};
