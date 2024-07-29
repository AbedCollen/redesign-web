import type { FC } from 'react';
import { Form } from 'react-bootstrap';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

interface NxFormSelectProps {
  allowEmpty?: boolean
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
  disabled?: boolean
  isInvalid?: boolean | string
  isValid?: boolean | string
  label?: React.ReactNode
  options?: { label: string, value: string }[]
  placeholder?: string
  required?: boolean
  subText?: React.ReactNode
  value?: string | null
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

const DEFAULT_CLASSNAME = {
  container: '',
  input: '',
  label: ''
};

const DEFAULT_OPTIONS: { label: string, value: string }[] = [];

const NxFormSelect: FC<NxFormSelectProps> = ({
  allowEmpty = false,
  className = DEFAULT_CLASSNAME,
  customStyles,
  disabled = false,
  isInvalid,
  isValid,
  label = 'Input Label',
  options = DEFAULT_OPTIONS,
  placeholder = '',
  required = false,
  subText,
  value,
  onChange,
  ...props
}) => {
  return (
    <Form.Group className={classNames('nx-form-select', className?.container)} style={customStyles?.container}>
      {label ? <Form.Label className={className?.label} style={customStyles?.label}>{label} {required ? <span className="text-danger fw-bolder fs-6">*</span> : null}</Form.Label> : null}
      <Form.Select
        className={classNames(className?.input)}
        disabled={disabled}
        isInvalid={!!isInvalid}
        isValid={!!isValid}
        style={customStyles?.input}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      >
        <option hidden={true} value="">{placeholder}</option>
        {allowEmpty ? <option value=""> </option> : null}
        {options?.map((o) => <option key={o.value || o.label} value={o.value || o.label}>{o.label}</option>)}
      </Form.Select>
      {subText ? <div className="text-caption text-neutral-90">{subText}</div> : null}
      {!isInvalid && isValid ? <Form.Control.Feedback>{isValid}</Form.Control.Feedback> : null}
      {isInvalid ? <Form.Control.Feedback type="invalid">{isInvalid}</Form.Control.Feedback> : null}
    </Form.Group>
  );
};

NxFormSelect.displayName = 'NxFormSelect';

export { NxFormSelect };
