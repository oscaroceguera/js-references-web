import React, { InputHTMLAttributes } from 'react';
import { Container, ShowError } from './styles';

interface IProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id: string;
  label: string;
  required?: boolean;
  success?: boolean;
  requiredMsg?: string;
  value: string;
  kind?: string;
  width?: string;
}

interface IInput
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id: string;
  value: string;
}

const Input: React.FC<IInput> = ({ id, value, ...rest }: IInput) => (
  <input id={id} value={value} {...rest} />
);

const Textarea: React.FC<IInput> = ({ id, value, ...rest }: IInput) => (
  <textarea id={id} value={value} {...rest} rows={20} />
);

const Field: React.FC<IProps> = ({
  id,
  label,
  required = false,
  requiredMsg,
  value,
  kind = 'input',
  width = '97%',
  ...rest
}: IProps) => {
  required = required && (value.length < 1 || value.length > 120);

  if (!requiredMsg) {
    requiredMsg = `${label} is required`;
  }

  const success = !required && value.length > 0;

  return (
    <Container required={required} success={success} width={width}>
      <label>
        {label}
        <br />
        {kind === 'textarea' ? (
          <Textarea id={id} value={value} {...rest} />
        ) : (
          <Input id={id} value={value} {...rest} />
        )}
        <br />
        <ShowError required={required}>{requiredMsg}</ShowError>
      </label>
    </Container>
  );
};

export default Field;
