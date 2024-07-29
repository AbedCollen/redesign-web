import type { FC } from 'react';
import type { FormCheckProps } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

type FormControlElement = HTMLInputElement;

type Types = 'checkbox' | 'radio' | 'switch';

interface NxFormCheckProps extends Omit<FormCheckProps, 'className' | 'isInvalid' | 'isValid'> {
  alignLabel?: 'end' | 'start'
  checked?: boolean
  className?: {
    container?: string
    input?: string
    label?: string
  }
  customStyles?: {
    container?: Record<string, unknown>
    input?: Record<string, unknown>
    label?: Record<string, unknown>
  }
  inline?: boolean
  isInvalid?: boolean | string
  isValid?: boolean | string
  label?: React.ReactNode
  required?: boolean
  subText?: React.ReactNode
  type?: Types
  onChange?: React.ChangeEventHandler<FormControlElement>
}

const DEFAULT_CLASSNAME = {
  container: '',
  input: '',
  label: ''
};

const NxFormCheck: FC<NxFormCheckProps> = ({
  alignLabel = 'start',
  checked,
  className = DEFAULT_CLASSNAME,
  customStyles,
  inline = false,
  isInvalid,
  isValid,
  label = 'Input Label',
  required = false,
  subText,
  type = 'checkbox',
  onChange,
  ...props
}) => {
  return (
    <Form.Group className={classNames('nx-form-check', className?.container, { [`check-inline label-${alignLabel}`]: inline })} style={customStyles?.container}>
      <div className="check-container">
        <Form.Label className={className?.label} style={customStyles?.label}>
          {label} {required ? <span className="text-danger fw-bolder fs-6">*</span> : null}
        </Form.Label>
        <Form.Check
          checked={checked}
          className={classNames(className?.input)}
          isInvalid={!!isInvalid}
          isValid={!!isValid}
          style={customStyles?.input}
          type={type}
          onChange={onChange}
          {...props} />
      </div>
      {subText ? <div className="text-caption text-neutral-90">{subText}</div> : null}
      {!isInvalid && isValid ? <Form.Control.Feedback>{isValid}</Form.Control.Feedback> : null}
      {isInvalid ? <Form.Control.Feedback type="invalid">{isInvalid}</Form.Control.Feedback> : null}
    </Form.Group>
  );
};

NxFormCheck.displayName = 'NxFormCheck';

export { NxFormCheck };
