import React from 'react';
import { Use_Input_Hook } from './hooks/Input_Hook';
import Survey_Input from './Survey_Input';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Button
} from 'reactstrap';
const { useRef } = React;

function Survey_Form() {
  // assign reset on useRef

  const { bind: bind_name, reset: reset_name } = Use_Input_Hook('');
  const { bind: bind_email, reset: reset_email } = Use_Input_Hook('');
  const { bind: bind_age, reset: reset_age } = Use_Input_Hook('');

  const handle_submit = (e: React.FormEvent) => {
    e.preventDefault();
    reset_name();
    reset_email();
    reset_age();
  };

  return (
    <div className='survey-form-container w-25'>
      <Form onSubmit={handle_submit}>
        <Survey_Input
          placeholder={'Enter your name'}
          label={'Name'}
          input_key={'name'}
          key={'name'}
          type='text'
          bind={bind_name}
          required={true}
        />
        <Survey_Input
          placeholder={'Enter your Email'}
          label={'Email'}
          input_key={'email'}
          key={'email'}
          type='email'
          bind={bind_email}
          required={true}
        />
        <Survey_Input
          placeholder={'Age'}
          label={'Age(optional)'}
          input_key={'age'}
          key={'age'}
          type='number'
          bind={bind_age}
          required={false}
        />
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Survey_Form;
