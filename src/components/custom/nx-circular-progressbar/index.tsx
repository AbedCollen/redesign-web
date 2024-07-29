import type { FC } from 'react';
import { useCallback } from 'react';

import {
  VIEWBOX_CENTER_X,
  VIEWBOX_CENTER_Y,
  VIEWBOX_HEIGHT,
  VIEWBOX_HEIGHT_HALF,
  VIEWBOX_WIDTH
} from './constants';
import Path from './path';

import type { CircularProgressbarProps } from './types';

const DEFAULT_CLASSES = {
  background: 'CircularProgressbar-background',
  path: 'CircularProgressbar-path',
  root: 'CircularProgressbar',
  text: 'CircularProgressbar-text',
  trail: 'CircularProgressbar-trail'
};

const DEFAULT_STYLES = {
  background: {},
  path: {},
  root: {},
  text: {},
  trail: {}
};

const DEFAULT_INNER_MULT = 4;

const NxCircularProgressbar: FC<CircularProgressbarProps> = ({
  background = false,
  backgroundPadding = 0,
  strokeWidth = 8,
  value = 0,
  minValue = 0,
  maxValue = 100,
  circleRatio = 1,
  className = '',
  classes = DEFAULT_CLASSES,
  counterClockwise = false,
  styles = DEFAULT_STYLES,
  text = ''
}) => {
  const getBackgroundPadding = useCallback(() => {
    if (background) {
      // Don't add padding if not displaying background
      return 0;
    }

    return backgroundPadding;
  }, [background, backgroundPadding]);

  const getPathRadius = useCallback(() => {
    /*
     * The radius of the path is defined to be in the middle, so in order for the path to
     * fit perfectly inside the 100x100 viewBox, need to subtract half the strokeWidth
     */
    return VIEWBOX_HEIGHT_HALF - strokeWidth / 2 - getBackgroundPadding();
  }, [getBackgroundPadding, strokeWidth]);

  const getPathRatio = useCallback(() => {
    const boundedValue = Math.min(Math.max(value, minValue), maxValue);

    return (boundedValue - minValue) / (maxValue - minValue);
  }, [maxValue, minValue, value]);

  const pathRadius = getPathRadius();
  const pathRatio = getPathRatio();

  return (
    <svg
      className={`${classes.root} ${className}`}
      data-test-id="CircularProgressbar"
      style={styles.root}
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
    >
      {background
        ? (
          <circle
            className={classes.background}
            cx={VIEWBOX_CENTER_X}
            cy={VIEWBOX_CENTER_Y}
            r={VIEWBOX_HEIGHT_HALF}
            style={styles.background} />
        )
        : null}

      <Path
        className={classes.trail}
        counterClockwise={counterClockwise}
        dashRatio={circleRatio}
        pathRadius={pathRadius}
        strokeWidth={strokeWidth}
        style={styles.trail} />

      <Path
        className={classes.path}
        counterClockwise={counterClockwise}
        dashRatio={pathRatio * circleRatio}
        pathRadius={pathRadius}
        strokeWidth={strokeWidth}
        style={styles.path} />

      {text
        ? (
          <foreignObject
            className={classes.text}
            height={`calc(100% - ${strokeWidth * DEFAULT_INNER_MULT}px)`}
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            width={`calc(100% - ${strokeWidth * DEFAULT_INNER_MULT}px)`}
            x={strokeWidth * 2}
            y={strokeWidth * 2}
          >
            <div style={styles.text}>{text}</div>
          </foreignObject>
        )
        : null}
    </svg>
  );
};

NxCircularProgressbar.displayName = 'NxCircularProgressbar';

export { NxCircularProgressbar };
