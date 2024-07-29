import type { FC } from 'react';
import type { FormCheckProps } from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';

import { classNames } from '@modules/@nxweb/core/cjs/strings';

type Types = 'checkbox' | 'radio';
type CheckedTypes = (number | string)[] | boolean | number | string | null;

interface NxFormCheckGroupProps extends Omit<FormCheckProps, 'checked' | 'className' | 'isInvalid' | 'isValid' | 'onChange'> {
  checked?: CheckedTypes
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
  isTight?: boolean
  isValid?: boolean | string
  items: { label: string, value: number | string }[]
  label?: React.ReactNode
  required?: boolean
  subText?: React.ReactNode
  type?: Types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (val: any) => void
}

const DEFAULT_ITEMS: { label: string, value: number | string }[] = [];

const DEFAULT_CLASSNAME = {
  container: '',
  input: '',
  label: ''
};

const NxFormCheckGroup: FC<NxFormCheckGroupProps> = ({
  checked,
  className = DEFAULT_CLASSNAME,
  customStyles,
  items = DEFAULT_ITEMS,
  isInvalid,
  isTight = false,
  isValid,
  label = 'Input Label',
  required = false,
  subText,
  type = 'checkbox',
  onChange,
  ...props
}) => {
  const checkHandler = (value: CheckedTypes) => {
    if (type === 'checkbox' && Array.isArray(checked)) {
      // @ts-expect-error: mismatch type
      return checked?.includes(value);
    }

    if (type === 'radio') {
      return value === checked;
    }
  };

  const handleChange = (isChecked: boolean, value: number | string) => {
    if (type === 'checkbox' && Array.isArray(checked)) {
      if (isChecked) {
        return onChange?.([...checked, value]);
      }

      return onChange?.(checked.filter((o) => o !== value));
    }

    if (type === 'radio') {
      return onChange?.(value);
    }
  };

  return (
    <Form.Group className={classNames('nx-form-check', className?.container)} style={customStyles?.container}>
      {label
        ? <Form.Label
            className={className?.label}
            style={customStyles?.label}
          >
        {label} {required
          ? <span className="text-danger fw-bolder fs-6">*</span>
          : null}
          </Form.Label>
        : null}
      <Row className={classNames({ 'is-tight': isTight })}>
        {items?.map((o) => {
          return (
            <Col className="d-flex items-center gap-1" key={o.value} xs={3}>
              <Form.Check
                checked={checked ? checkHandler(o.value) : undefined}
                className={classNames(className?.input)}
                isInvalid={!!isInvalid}
                isValid={!!isValid}
                name="form-1"
                style={customStyles?.input}
                type={type}
                onChange={(e) => handleChange(e.target.checked, o.value)}
                {...props} />
              <div className="text-body-2 fw-medium text-neutral-90">{o.label}</div>
            </Col>
          );
        })}
      </Row>
      {subText ? <div className="text-caption text-neutral-90">{subText}</div> : null}
      {!isInvalid && isValid ? <Form.Control.Feedback>{isValid}</Form.Control.Feedback> : null}
      {isInvalid ? <Form.Control.Feedback type="invalid">{isInvalid}</Form.Control.Feedback> : null}
    </Form.Group>
  );
};

NxFormCheckGroup.displayName = 'NxFormCheckGroup';

export { NxFormCheckGroup };
