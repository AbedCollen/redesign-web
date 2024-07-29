import type { FC } from 'react';
import { useMemo } from 'react';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { PersonOutline } from '@nxweb/icons/ionicons';

interface NxAvatarProps {
  className?: string
  size?: number
  src?: File | string
}

const resolveSrc = (data: File | string): string => {
  if (data instanceof File) {
    return URL.createObjectURL(data);
  }

  return data;
};

const NxAvatar: FC<NxAvatarProps> = ({
  className = '',
  size = 96,
  src = ''
}) => {
  const imgSize = useMemo(() => {
    return {
      maxHeight: size,
      maxWidth: size,
      minHeight: size,
      minWidth: size
    };
  }, [size]);

  return (
    <div className={classNames('nx-avatar', className)} style={imgSize}>
      {src
        ? <img alt="" height={size} src={resolveSrc(src)} width={size} />
        : <div className="ic-wrapper"><PersonOutline size={52} /></div>}
    </div>
  );
};

NxAvatar.displayName = 'NxAvatar';

export { NxAvatar };
