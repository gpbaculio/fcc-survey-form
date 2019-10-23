import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button,
  InputProps
} from 'reactstrap';

interface Survey_Input_Props {
  label: string;
  bind: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  input_key: string;
  placeholder: string;
  type: 'email' | 'text' | 'number';
  required: boolean
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
    <FormGroup row>
      <Label for={input_key} sm={2}>
        {label}
      </Label>
      <Col sm={10}>
        <Input
          type={type}
          name={input_key}
          id={input_key}
          {...bind}
          required={required}
          placeholder={placeholder}
        />
      </Col>
    </FormGroup>
  );
};

export default Survey_Input;
