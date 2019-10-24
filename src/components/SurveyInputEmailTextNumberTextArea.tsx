import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export interface Survey_Input_Props {
  label: string;
  bind: {
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  input_key: string;
  placeholder: string;
  type: 'email' | 'text' | 'number' | 'select' | 'textarea';
  required: boolean;
  options?: string[];
  default_value?: string;
}

const Survey_Input = ({
  label,
  bind,
  input_key,
  placeholder,
  type,
  required
}: Survey_Input_Props) => {
  return (
    <FormGroup>
      <Label for={input_key}>{label}</Label>
      <Input
        type={type}
        name={input_key}
        id={input_key}
        {...bind}
        required={required}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

export default Survey_Input;
