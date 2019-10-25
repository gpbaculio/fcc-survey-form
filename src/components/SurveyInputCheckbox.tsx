import React from 'react';
import { FormGroup, Label, CustomInput } from 'reactstrap';

export interface SurveyInputCheckbox_Props {
  label: string;
  checkbox_options: { name: string; label: string }[];
  bind: {
    value: { [key: string]: boolean };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
const SurveyInputCheckbox = ({
  label,
  checkbox_options,
  bind
}: SurveyInputCheckbox_Props) => {
  return (
    <FormGroup>
      <Label for='exampleCheckbox'>{label}</Label>
      <div className='d-flex flex-column'>
        {checkbox_options.map(({ name, label }) => (
          <CustomInput
            key={name}
            checked={bind.value[name]}
            type='checkbox'
            id={name}
            value={name}
            onChange={bind.onChange}
            name={name}
            label={label}
          />
        ))}
      </div>
    </FormGroup>
  );
};

export default SurveyInputCheckbox;
