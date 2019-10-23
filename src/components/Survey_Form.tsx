import React from 'react';
import { Use_Input_Hook } from './hooks/Input_Hook';
import Survey_Input_Email_Text_Number from './Survey_Input_Email_Text_Number';
import { Form, Button } from 'reactstrap';
import Survey_Input_Select from './Survey_Input_Select';

function Survey_Form() {
  const select_options = [
    'Student',
    'Full Time Job',
    'Full Time Learner',
    'Prefer not to say',
    'Other'
  ];

  const { bind: bind_name, reset: reset_name } = Use_Input_Hook('');
  const { bind: bind_email, reset: reset_email } = Use_Input_Hook('');
  const { bind: bind_age, reset: reset_age } = Use_Input_Hook('');
  const { bind: bind_role, reset: reset_role } = Use_Input_Hook('');

  const handle_submit = (e: React.FormEvent) => {
    e.preventDefault();
    reset_name();
    reset_email();
    reset_age();
    reset_role();
  };

  return (
    <div className='survey-form-container w-25'>
      <Form onSubmit={handle_submit}>
        <Survey_Input_Email_Text_Number
          placeholder={'Enter your name'}
          label={'Name'}
          input_key={'name'}
          key={'name'}
          type='text'
          bind={bind_name}
          required={true}
        />
        <Survey_Input_Email_Text_Number
          placeholder={'Enter your Email'}
          label={'Email'}
          input_key={'email'}
          key={'email'}
          type='email'
          bind={bind_email}
          required={true}
        />
        <Survey_Input_Email_Text_Number
          placeholder={'Age'}
          label={'Age(optional)'}
          input_key={'age'}
          key={'age'}
          type='number'
          bind={bind_age}
          required={false}
        />
        <Survey_Input_Select
          placeholder={'Select your role'}
          label={'Which option best describes your current role?'}
          input_key={'select_role'}
          key={'select_role'}
          type='select'
          bind={bind_role}
          required={true}
          options={select_options}
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default Survey_Form;
