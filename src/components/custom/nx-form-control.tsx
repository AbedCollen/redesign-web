import type { FC } from 'react';
import { useRef, useState } from 'react';
import type { FormControlProps } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

import { EyeFill, EyeSlashFill } from '@nxweb/icons/bootstrap';
import { Plus } from '@nxweb/icons/feather';

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

type Types = 'date' | 'email' | 'file' | 'number' | 'password' | 'text';

interface NxFormControlProps extends Omit<FormControlProps, 'className' | 'isInvalid' | 'isValid'> {
  as?: 'textarea'
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
  isInvalid?: boolean | string
  isValid?: boolean | string
  label?: React.ReactNode
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  rows?: number
  subText?: React.ReactNode
  type?: Types
  value?: string[] | number | string
  onChange?: React.ChangeEventHandler<FormControlElement>
}

const DEFAULT_CLASSNAME = {
  container: '',
  input: '',
  label: ''
};

const resolveType = (type: Types, show: boolean) => {
  if (type === 'password') {
    if (show) {
      return 'text';
    }

    return 'password';
  }

  if (type === 'file') {
    return 'text';
  }

  return type;
};

const NxFormControl: FC<NxFormControlProps> = ({
  as,
  className = DEFAULT_CLASSNAME,
  customStyles,
  isInvalid,
  isValid,
  label = 'Input Label',
  placeholder,
  rows,
  readOnly = false,
  required = false,
  subText,
  type = 'text',
  value,
  onChange,
  ...props
}) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);

  return (
    <Form.Group className={classNames('nx-form-control', className?.container)} style={customStyles?.container}>
      {label ? <Form.Label className={className?.label} style={customStyles?.label}>{label} {required ? <span className="text-danger fw-bolder fs-6">*</span> : null}</Form.Label> : null}
      <InputGroup>
        <Form.Control
          as={as}
          className={classNames(className?.input, { 'nx-form-password': type === 'password' })}
          isInvalid={!!isInvalid}
          isValid={!!isValid}
          placeholder={placeholder}
          readOnly={type === 'file' || readOnly}
          rows={rows}
          style={customStyles?.input}
          type={resolveType(type, show)}
          // @ts-expect-error : value
          value={type === 'file' ? value?.name : value}
          onChange={(e) => (type === 'file' ? {} : onChange?.(e))}
          onClick={() => (type === 'file' ? fileInput?.current?.click() : {})}
          {...props} />
        {type === 'password'
          ? <InputGroup.Text className="cursor-pointer" onClick={() => setShow(!show)}>
            {show
              ? <EyeFill className="text-neutral-50" size={19} />
              : <EyeSlashFill className="text-neutral-50" size={19} />}
          </InputGroup.Text>
          : null}
        {type === 'file'
          ? <InputGroup.Text className="text-info bg-neutral-20" onClick={() => fileInput.current?.click()}>
            <Plus size={19} />
          </InputGroup.Text>
          : null}
      </InputGroup>
      {type === 'file' ? <Form.Control className="d-none" ref={fileInput} type="file" onChange={onChange} /> : null}
      {subText ? <div className="text-caption text-neutral-90">{subText}</div> : null}
      {!isInvalid && isValid ? <Form.Control.Feedback>{isValid}</Form.Control.Feedback> : null}
      {isInvalid ? <Form.Control.Feedback type="invalid">{isInvalid}</Form.Control.Feedback> : null}
    </Form.Group>
  );
};

NxFormControl.displayName = 'NxFormControl';

export { NxFormControl };
