import type { ReactNode } from 'react';

export interface LayoutConfig {
  menuCollapsed?: boolean
  menuHidden?: boolean
  scheme?: string
  scrollTop?: boolean
  transition?: string
}

export interface LayoutData {
  menuCollapsed: boolean
  menuHidden: boolean
  scheme: string
  scrollTop: boolean
  transition: string
  windowWidth: number
}

export type LayoutState = LayoutData & {
  collapseMenu: (collapse?: boolean) => void
  hideMenu: (hide?: boolean) => void
  setScheme: (scheme: string) => void
  setScrollTop: (enabled?: boolean) => void
  setTransition: (transition: string) => void
  updateWindowWidth: () => void
};

export interface NavigationHeader {
  header: string
}

export interface NavigationLink {
  [key: string]: unknown
  badge?: string
  badgeText?: ReactNode
  children?: NavigationLink[]
  disabled?: boolean
  externalLink?: boolean
  hidden?: () => boolean
  icon?: ReactNode
  id: string
  navLink?: string
  text: string
  title?: string
}

export type NavigationConfig = (NavigationHeader | NavigationLink)[];
