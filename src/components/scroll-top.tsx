import { forwardRef, useEffect, useState } from 'react';
import type { ReactNode, Ref } from 'react';

import { classNames } from '@nxweb/core/strings';

export interface ScrollTopProps {
  children?: ReactNode
  className?: string
  scrollBehaviour?: ScrollBehavior
  showOffset?: number
}

export const ScrollTop = forwardRef(({
  children,
  className = '',
  scrollBehaviour = 'smooth',
  showOffset = 0,

  ...rest
}: ScrollTopProps, ref: Ref<HTMLDivElement>) => {
  // ** State
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset >= showOffset) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }
  }, [showOffset]);

  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: scrollBehaviour });
  };

  return (
    visible
      ? (
        <div className={classNames('scroll-to-top', className)} ref={ref} onClick={handleScrollToTop} {...rest}>
          {children}
        </div>
      )
      : null
  );
});

