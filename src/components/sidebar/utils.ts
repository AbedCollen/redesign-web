import type { NavigationLink } from '@layouts/types';

export const interpolateParams = (s: string, params?: Record<string, unknown>): string => {
  return params
    // eslint-disable-next-line prefer-named-capture-group, require-unicode-regexp
    ? (s || '').replace(/:(\w+)\b/g, (_, param) => {
      return params[param] || param;
    })
    : s;
};

/**
 * Return which component to render based on it's data/context
 * @param item - nav menu item
 */
export const resolveSidebarItemComponent = (item: Record<string, unknown>) => {
  if (typeof item.header !== 'undefined') return 'SidebarSection';
  if (item.children) return 'SidebarGroup';

  return 'SidebarLink';
};

/**
 * Return which component to render based on it's data/context
 * @param item - nav menu item
 */
export const resolveMenubarItemComponent = (item: Record<string, unknown>) => {
  if (item.children) return 'MenubarGroup';

  return 'MenubarLink';
};

export const isNavLinkActive = (link: string, currentURL: string, routerProps: unknown, params?: Record<string, unknown>): boolean => {
  return (
    currentURL === link ||
    currentURL === interpolateParams(link, params) ||

    // @ts-expect-error: Property 'meta' does not exist on type '{}'
    routerProps?.meta?.navLink === link ||

    // @ts-expect-error: Property 'meta' does not exist on type '{}'
    (interpolateParams(routerProps?.meta?.navLink, params) === link)
  );

  // Return currentURL === link
};

export const isNavGroupActive = (
  children: NavigationLink[],
  currentURL: string,
  routerProps: unknown
): boolean => {
  return children.some((child) => {
    // If child have children => It's group => Go deeper(recursive)
    if (child.children) {
      return isNavGroupActive(child.children, currentURL, routerProps);
    }

    // Else it's link => Check for matched Route
    return isNavLinkActive(child.navLink || '', currentURL, routerProps);
  });
};

export const search = (
  navigation: NavigationLink[],
  currentURL: string,
  routerProps: unknown
): { id: string } | undefined => {
  let result = undefined;

  navigation.some((child) => {
    let children = undefined;

    // If child have children => It's group => Go deeper(recursive)
    if (child.children && (children = search(child.children, currentURL, routerProps))) {
      // eslint-disable-next-line no-return-assign
      return (result = {
        children,
        id: child.id
      });
    }

    // Else it's link => Check for matched Route
    if (child.navLink && isNavLinkActive(child.navLink, currentURL, routerProps)) {
      // eslint-disable-next-line no-return-assign
      return (result = {
        id: child.id
      });
    }

    return false;
  });

  return result;
};

/**
 * Loop through nested object
 * @param obj - the nested object
 * @param match - the string to match
 */
export const getAllParents = (obj: object, match: string): string[] => {
  const res: string[] = [];
  const recurse = (obj: object, _current?: unknown) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== undefined) {
        if (value && typeof value === 'object') {
          recurse(value, key);
        } else if (key === match) {
          res.push(value);
        }
      }
    });
  };

  recurse(obj);

  return res;
};
