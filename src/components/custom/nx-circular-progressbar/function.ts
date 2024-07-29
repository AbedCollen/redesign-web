import type { BuildStylesProps, CircularProgressbarStyles } from './types';

const buildStyles = ({
  rotation,
  strokeLinecap,
  textColor,
  textSize,
  pathColor,
  pathTransition,
  pathTransitionDuration,
  trailColor,
  backgroundColor
}: BuildStylesProps): CircularProgressbarStyles => {
  const rotationTransform = rotation === null ? undefined : `rotate(${rotation}turn)`;
  const rotationTransformOrigin = rotation === null ? undefined : 'center center';

  return {
    background: removeUndefinedValues({
      fill: backgroundColor
    }),
    path: removeUndefinedValues({
      stroke: pathColor,
      strokeLinecap,
      transform: rotationTransform,
      transformOrigin: rotationTransformOrigin,
      transition: pathTransition,
      transitionDuration: pathTransitionDuration === null ? undefined : `${pathTransitionDuration}s`
    }),
    root: {},
    text: removeUndefinedValues({
      color: textColor,
      fontSize: textSize
    }),
    trail: removeUndefinedValues({
      stroke: trailColor,
      strokeLinecap,
      transform: rotationTransform,
      transformOrigin: rotationTransformOrigin
    })
  };
};

function removeUndefinedValues(obj: Record<string, unknown>) {
  Object.keys(obj).forEach((key: string) => {
    if (obj[key] === null) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete obj[key];
    }
  });

  return obj;
}

export default buildStyles;
