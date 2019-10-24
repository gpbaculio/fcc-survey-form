import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Survey_Input_Props } from './SurveyInputEmailTextNumberTextArea';

export interface SurveyInputTextArea_Props {
  name: string;
  label: string;
  bind: {
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  place_holder: string;
}
const SurveyInputTextArea = ({
  name,
  label,
  bind,
  place_holder
}: SurveyInputTextArea_Props) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        placeholder={place_holder}
        type='textarea'
        {...bind}
        name={name}
        id={name}
      />
    </FormGroup>
  );
};

export default SurveyInputTextArea;
