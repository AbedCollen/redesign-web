import type { FC, PropsWithChildren } from 'react';
import {
  createContext,
  useCallback, useContext, useEffect, useLayoutEffect, useReducer
} from 'react';

import { usePageTitle } from '@nxweb/core/hooks';
import type { RouteType } from '@nxweb/core/router';

import { AppConfig } from '@config/app';
import { LayoutConfig } from '@config/layout';

import type { LayoutConfig as LayoutConfigType, LayoutData, LayoutState } from './types';

const NOP = () => { };
const loadScheme = (key: string, config?: LayoutConfigType, storage: Storage = localStorage) => {
  const defaultValue = config?.scheme || 'light';

  try {
    const item = storage.getItem(key);

    return item || defaultValue;
  } catch (error) {
    console.error(error);

    return defaultValue;
  }
};
const saveScheme = (key: string, scheme: string, storage: Storage = localStorage) => {
  try {
    storage.setItem(key, scheme);
  } catch (error) {
    console.error(error);
  }
};

export const LayoutContext = createContext<LayoutState>({
  scheme: 'light',
  setScheme: NOP,

  setTransition: NOP,
  transition: 'none',

  updateWindowWidth: NOP,
  windowWidth: 0,

  hideMenu: NOP,
  menuHidden: false,

  collapseMenu: NOP,
  menuCollapsed: false,

  scrollTop: true,
  setScrollTop: NOP
});

export type LayoutAction = {
  type: 'COLLAPSE_MENU' | 'HIDE_MENU' | 'SCROLL_TOP'
  value: boolean
} | {
  type: 'SCHEME' | 'TRANSITION'
  value: string
} | {
  type: 'WINDOW_WIDTH'
};

export const LayoutReducer = (state: LayoutData, action: LayoutAction): LayoutData => {
  switch (action.type) {
    case 'WINDOW_WIDTH':
      return { ...state, windowWidth: window.innerWidth };
    case 'HIDE_MENU':
      return { ...state, menuHidden: action.value };
    case 'COLLAPSE_MENU':
      return { ...state, menuCollapsed: action.value };
    case 'SCROLL_TOP':
      return { ...state, scrollTop: action.value };
    case 'SCHEME':
      return { ...state, scheme: action.value };
    case 'TRANSITION':
      return { ...state, transition: action.value };

    default:
      return state;
  }
};

export type LayoutProviderProps = PropsWithChildren<RouteType>;

export const LayoutProvider: FC<LayoutProviderProps> =
({
  children,
  title
}) => {
  const [_, setTitle] = usePageTitle({ appName: AppConfig.name });

  const [state, dispatch] = useReducer(LayoutReducer, {
    scheme: loadScheme('skin', LayoutConfig),
    transition: LayoutConfig?.transition || 'none',
    windowWidth: window.innerWidth,
    menuHidden: LayoutConfig?.menuHidden || false,
    menuCollapsed: LayoutConfig?.menuCollapsed || false,
    scrollTop: LayoutConfig?.scrollTop || true
  });

  const setScheme = useCallback((scheme: string) => {
    dispatch({ type: 'SCHEME', value: scheme });
  }, []);

  const setTransition = useCallback((transition: string) => {
    dispatch({ type: 'TRANSITION', value: transition });
  }, []);

  const updateWindowWidth = useCallback(() => {
    dispatch({ type: 'WINDOW_WIDTH' });
  }, []);

  const hideMenu = useCallback((hide?: boolean) => {
    dispatch({ type: 'HIDE_MENU', value: typeof hide === 'undefined' ? true : hide });
  }, []);

  const collapseMenu = useCallback((collapse?: boolean) => {
    dispatch({ type: 'COLLAPSE_MENU', value: typeof collapse === 'undefined' ? true : collapse });
  }, []);

  const setScrollTop = useCallback((enabled?: boolean) => {
    dispatch({ type: 'SCROLL_TOP', value: typeof enabled === 'undefined' ? true : enabled });
  }, []);

  useLayoutEffect(() => {
    const element = window.document.body;
    const classNames: Record<string, string> = {
      dark: 'dark-layout',
      bordered: 'bordered-layout',
      'semi-dark': 'semi-dark-layout'
    };

    element.classList.remove(...element.classList);

    if (state.scheme !== 'light') {
      element.classList.add(classNames[state.scheme]);
    }

    saveScheme('skin', state.scheme);
  }, [state.scheme]);

  useEffect(() => {
    setTitle(title || AppConfig.title);

    return () => {
      setTitle('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: LayoutState = {
    ...state,
    setScheme,
    setTransition,
    updateWindowWidth,
    hideMenu,
    collapseMenu,
    setScrollTop
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export const useLayout = () => useContext(LayoutContext);
