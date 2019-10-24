import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export interface Survey_Input_Radio_Props {
  label: string;
  name: string;
  radio_options: string[];
  bind: {
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const Survey_Input_Radio = ({
  label,
  name,
  radio_options,
  bind
}: Survey_Input_Radio_Props) => {
  return (
    <FormGroup tag='fieldset'>
      <Label>{label}</Label>
      {radio_options.map(radio_option => (
        <FormGroup check key={radio_option}>
          <Label check>
            <Input
              type='radio'
              name={name}
              value={radio_option}
              onChange={bind.onChange}
              checked={bind.value === radio_option}
            />
            {radio_option}
          </Label>
        </FormGroup>
      ))}
    </FormGroup>
  );
};

export default Survey_Input_Radio;
