import type { FC, ForwardedRef, PropsWithChildren, ReactNode } from 'react';
import { Badge } from 'react-bootstrap';

import { classNames } from '@nxweb/core/strings';

import DefaultAvatar from './avatar.svg';

// ** PropTypes
interface AvatarProps {
  badgeColor?:
  'danger' | 'dark' | 'info' | 'light-danger' | 'light-dark' | 'light-info' | 'light-primary' | 'light-secondary' | 'light-success' | 'light-warning' | 'primary' | 'secondary' | 'success' | 'warning'
  badgeText?: string
  badgeUp?: boolean
  className?: string
  color?:
  'danger' | 'dark' | 'info' | 'light-danger' | 'light-dark' | 'light-info' | 'light-primary' | 'light-secondary' | 'light-success' | 'light-warning' | 'primary' | 'secondary' | 'success' | 'warning'
  content?: ReactNode
  contentStyles?: object
  icon?: ReactNode
  img?: string | false
  imgClassName?: string
  imgHeight?: number | string
  imgWidth?: number | string
  initials?: boolean | string
  ref?: React.ForwardedRef<unknown>
  size?: 'lg' | 'sm' | 'xl'
  src?: string
  status?: 'away' | 'busy' | 'offline' | 'online'
  tag?: string | ((props: PropsWithChildren<{
    className: string
    ref: ForwardedRef<unknown>
  }>) => string)
}

const DEFAULT_SIZE = 32;

const Avatar: FC<AvatarProps> = ({
  badgeColor,
  badgeText,
  badgeUp,
  color,
  className,
  contentStyles,
  imgClassName,
  initials,
  size,
  content,
  icon,
  img,
  imgHeight,
  imgWidth,
  status,
  tag: Tag = 'div',
  ref = null,
  ...rest
}) => {
  // ** Function to extract initials from content
  const getInitials = (str: string): string => {
    const results: string[] = [];
    const wordArray = str.split(' ');

    wordArray.forEach((e) => {
      results.push(e[0]);
    });

    return results.join('');
  };

  return (
    <Tag
      className={classNames('avatar shadow-sm', className, {
        [`bg-${color}`]: color,
        [`avatar-${size}`]: size
      })}
      ref={ref}
      {...rest}
    >
      {icon || img === false || typeof img === 'undefined'
        ? (
          <span
            className={classNames('avatar-content', {
              'position-relative': badgeUp
            })}
            style={contentStyles}
          >
            {initials && typeof content === 'string' ? getInitials(content) : content}

            {icon || null}
            {badgeUp
              ? (
                <Badge className="badge-sm badge-up" color={badgeColor || 'primary'} pill={true}>
                  {badgeText || '0'}
                </Badge>
              )
              : null}
          </span>
        )
        : (
          <img
            alt="avatarImg"
            className={imgClassName}
            height={imgHeight && !size ? imgHeight : DEFAULT_SIZE}
            src={img || DefaultAvatar}
            width={imgWidth && !size ? imgWidth : DEFAULT_SIZE} />
        )}
      {status
        ? (
          <span
            className={classNames({
              [`avatar-status-${status}`]: status,
              [`avatar-status-${size}`]: size
            })} />
        )
        : null}
    </Tag>
  );
};

// @ts-expect-error: Object is of type 'unknown'
(Avatar as unknown).DefaultPicture = DefaultAvatar;

Avatar.displayName = 'Avatar';

export { Avatar };
