import type {
  FC, PropsWithChildren
} from 'react';

type BlankLayoutProps = PropsWithChildren<Record<string, unknown>>;

const BlankLayout: FC<BlankLayoutProps> = ({ children = null }) => {
  return (
    <div className="blank-page">
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

BlankLayout.displayName = 'BlankLayout';

export { BlankLayout };
export type { BlankLayoutProps };
