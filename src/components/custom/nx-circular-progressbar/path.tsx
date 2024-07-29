import type { FC } from 'react';

import { VIEWBOX_CENTER_X, VIEWBOX_CENTER_Y } from './constants';

import type { GetDashStyleProps, GetPathDescriptionProps, PathProps } from './types';

// SVG path description specifies how the path should be drawn
const getPathDescription = ({
  pathRadius,
  counterClockwise
}: GetPathDescriptionProps) => {
  const radius = pathRadius;
  const rotation = counterClockwise ? 1 : 0;

  /*
   * Move to center of canvas
   * Relative move to top canvas
   * Relative arc to bottom of canvas
   * Relative arc to top of canvas
   */
  return `
      M ${VIEWBOX_CENTER_X},${VIEWBOX_CENTER_Y}
      m 0,-${radius}
      a ${radius},${radius} ${rotation} 1 1 0,${2 * radius}
      a ${radius},${radius} ${rotation} 1 1 0,-${2 * radius}
    `;
};

const getDashStyle = ({
  counterClockwise,
  dashRatio,
  pathRadius
}: GetDashStyleProps) => {
  const diameter = Math.PI * 2 * pathRadius;
  const gapLength = (1 - dashRatio) * diameter;

  return {
    // Have dash be full diameter, and gap be full diameter
    strokeDasharray: `${diameter}px ${diameter}px`,

    // Shift dash backward by gapLength, so gap starts appearing at correct distance
    strokeDashoffset: `${counterClockwise ? -gapLength : gapLength}px`
  };
};

const Path: FC<PathProps> = ({
  className,
  counterClockwise,
  dashRatio,
  pathRadius,
  strokeWidth,
  style
}) => {
  return (
    <path
      className={className}
      d={getPathDescription({
        counterClockwise,
        pathRadius
      })}
      fillOpacity={0}
      strokeWidth={strokeWidth}
      style={({ ...style, ...getDashStyle({ counterClockwise, dashRatio, pathRadius }) })} />
  );
};

Path.displayName = 'Path';

export default Path;
