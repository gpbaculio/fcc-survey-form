import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Survey_Input_Props } from './Survey_Input_Email_Text_Number';

const Survey_Input_Select = ({
  label,
  bind,
  input_key,
  placeholder,
  type,
  required,
  options
}: Survey_Input_Props) => {
  const default_value = 'Select current role';
  return (
    <FormGroup>
      <Label for={input_key}>{label}</Label>
      <Input
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={bind.onChange}
        name={input_key}
        id={input_key}>
        <option disabled value={default_value} defaultValue={default_value}>
          {default_value}
        </option>
        {/* options! - we are sure it's true */}
        {options!.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default Survey_Input_Select;
