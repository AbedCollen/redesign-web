import type { ReactNode } from 'react';

import { classNames } from '@nxweb/core/strings';

interface SpinnerProps {
  className?: string
  message?: ReactNode
}

export const Spinner = ({
  className,
  message
}: SpinnerProps = {}) => {
  return (
    <div className={classNames('fallback-spinner', className)}>
      <div className="loading component-loader">
        <div className="effect-1 effects" />
        <div className="effect-2 effects" />
        <div className="effect-3 effects" />
      </div>
      {
        message ? <div className="message-loader">{ message }</div> : null
      }
    </div>
  );
};
