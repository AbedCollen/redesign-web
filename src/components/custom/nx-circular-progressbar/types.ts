export interface CircularProgressbarStyles {
  background?: React.CSSProperties
  path?: React.CSSProperties
  root?: React.CSSProperties
  text?: React.CSSProperties
  trail?: React.CSSProperties
}

export interface CircularProgressbarDefaultProps {
  background?: boolean
  backgroundPadding?: number
  circleRatio?: number
  classes?: {
    background: string
    path: string
    root: string
    text: string
    trail: string

  }
  className?: string
  counterClockwise?: boolean
  maxValue?: number
  minValue?: number
  strokeWidth?: number
  styles?: CircularProgressbarStyles
  text?: React.ReactNode
}

/*
 * These are used for any CircularProgressbar wrapper components that can safely
 * ignore default props.
 */
export interface CircularProgressbarWrapperProps {
  background?: boolean
  backgroundPadding?: number
  circleRatio?: number
  classes?: {
    background: string
    path: string
    root: string
    text: string
    trail: string
  }
  className?: string
  counterClockwise?: boolean
  maxValue?: number
  minValue?: number
  strokeWidth?: number
  styles?: CircularProgressbarStyles
  text?: React.ReactNode
  value: number
}

export type CircularProgressbarProps = CircularProgressbarDefaultProps & {
  value?: number
};

export interface BuildStylesProps {
  backgroundColor?: string
  pathColor?: string
  pathTransition?: string
  pathTransitionDuration?: number // Measured in seconds
  rotation?: number // Number of turns, 0-1
  strokeLinecap?: unknown
  textColor?: string
  textSize?: number | string
  trailColor?: string
}

export interface PathProps {
  className?: string
  counterClockwise: boolean
  dashRatio: number
  pathRadius: number
  strokeWidth: number
  style?: object
}

export interface GetPathDescriptionProps {
  counterClockwise: boolean
  pathRadius: number
}

export interface GetDashStyleProps {
  counterClockwise: boolean
  dashRatio: number
  pathRadius: number
}
