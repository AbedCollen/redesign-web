import type { LayoutType } from '@nxweb/core/router';
import { LayoutRegistry } from '@nxweb/core/router';

import { BlankLayout } from './blank';
import { CustomLayout } from './custom';
import { DefaultLayout } from './default';
import { LayoutProvider } from './provider';

// ** All of the available layouts
const Layouts = new LayoutRegistry({
  blank: BlankLayout as LayoutType,
  custom: CustomLayout as LayoutType,
  default: DefaultLayout as LayoutType
});

export { Layouts, LayoutProvider };
