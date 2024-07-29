// ** Vertical Menu Components

import type { NavigationLink } from '@layouts/types';

import { SidebarGroup } from './sidebar-group';
import { SidebarLink } from './sidebar-link';
import { SidebarSection } from './sidebar-section';
import { resolveSidebarItemComponent } from './utils';

interface SidebarProps {
  activeItem: unknown
  currentActiveItem: unknown
  groupActive: unknown
  groupOpen: unknown
  items: NavigationLink[] | undefined
  menuHover: unknown
  routerProps: unknown
  setActiveItem: unknown
  setGroupActive: unknown
  setGroupOpen: unknown
  menuCollapsed?: boolean
  parentItem?: NavigationLink
  toggleActiveGroup?: (item: string | unknown, parentItem?: Record<string, unknown>) => void

}

const SidebarItems = (props: SidebarProps): React.ReactElement => {
  // ** Components Object
  const Components = {
    SidebarGroup,
    SidebarLink,
    SidebarSection
  };

  // ** Render Nav Menu Items

  const RenderNavItems = props?.items?.map((item: NavigationLink, index: number) => {
    const TagName = Components[resolveSidebarItemComponent(item)];
    if (item.hidden?.()) {
      return null;
    }

    // @ts-expect-error: Type 'Record<string, unknown>' is not assignable to type 'NavigationLink & NavigationHeader'.
    return <TagName item={item} key={index} {...props} />;
  });

  // @ts-expect-error: Type 'Element[]' is missing the following properties from type 'ReactElement<any, string | JSXElementConstructor<any>>': type, props, key
  return RenderNavItems;
};

SidebarItems.displayName = 'SidebarItems';
export { SidebarItems };
