import React from 'react';
import { Use_Input_Hook } from './hooks/Input_Hook';
import SurveyInputEmailTextNumberTextArea from './SurveyInputEmailTextNumberTextArea';
import { Form, Button } from 'reactstrap';
import SurveyInputSelect from './SurveyInputSelect';
import SurveyInputRadio from './SurveyInputRadio';
import { Use_Input_Hook_CheckBox } from './hooks/Input_Hook_CheckBox';
import SurveyInputCheckbox from './SurveyInputCheckbox';
import SurveyInputTextArea from './SurveyInputTextArea';

function Survey_Form() {
  const select_options = [
    'Student',
    'Full Time Job',
    'Full Time Learner',
    'Prefer not to say',
    'Other'
  ];
  const radio_options = ['Definitely', 'Maybe', 'Not Sure'];
  const select_options_fcc_features = [
    'Challenges',
    'Projects',
    'Community',
    'Open Source'
  ];
  const checkbox_options = [
    { name: 'frontend_projects', label: 'Front-end Projects' },
    { name: 'backend_projects', label: 'Back-end Projects' },
    { name: 'data_visualization', label: 'Data Visualization' },
    { name: 'challenges', label: 'Challenges' },
    { name: 'open_source_community', label: 'Open Source Community' },
    { name: 'gitter_help_rooms', label: 'Gitter Help Rooms' },
    { name: 'videos', label: 'Videos' },
    { name: 'city_meetups', label: 'City Meetups' },
    { name: 'wiki', label: 'Wiki' },
    { name: 'forum', label: 'Forum' },
    { name: 'additional_course', label: 'Additional Courses' }
  ];
  // to initialize hooks object
  const checkbox_keys = checkbox_options.map(opt => opt.name);
  const { bind: bind_name, reset: reset_name } = Use_Input_Hook('');
  const { bind: bind_email, reset: reset_email } = Use_Input_Hook('');
  const { bind: bind_age, reset: reset_age } = Use_Input_Hook(0);
  const { bind: bind_role, reset: reset_role } = Use_Input_Hook('');
  const { bind: bind_recommend, reset: reset_recommend } = Use_Input_Hook('');
  const { bind: bind_fcc_features, reset: reset_fcc_features } = Use_Input_Hook(
    ''
  );
  const {
    bind: bind_see_improved,
    reset: reset_see_improved
  } = Use_Input_Hook_CheckBox(checkbox_keys);

  const {
    bind: bind_comments_suggestions,
    reset: reset_comments_suggestions
  } = Use_Input_Hook('');

  const handle_submit = (e: React.FormEvent) => {
    e.preventDefault();
    reset_name();
    reset_email();
    reset_age();
    reset_role();
    reset_recommend();
    reset_see_improved();
    reset_fcc_features();
    reset_comments_suggestions();
  };

  return (
    <div className='survey-form-container w-25'>
      <Form onSubmit={handle_submit}>
        <SurveyInputEmailTextNumberTextArea
          placeholder={'Enter your name'}
          label={'Name'}
          input_key={'name'}
          key={'name'}
          type='text'
          bind={bind_name}
          required={true}
        />
        <SurveyInputEmailTextNumberTextArea
          placeholder={'Enter your Email'}
          label={'Email'}
          input_key={'email'}
          key={'email'}
          type='email'
          bind={bind_email}
          required={true}
        />
        <SurveyInputEmailTextNumberTextArea
          placeholder={'Age'}
          label={'Age(optional)'}
          input_key={'age'}
          key={'age'}
          type='number'
          bind={bind_age}
          required={false}
        />
        <SurveyInputSelect
          placeholder={'Select your role'}
          label={'Which option best describes your current role?'}
          input_key={'select_role'}
          key={'select_role'}
          type='select'
          bind={bind_role}
          required={true}
          options={select_options}
          default_value={'Select your role'}
        />
        <SurveyInputRadio
          label={'Would you recommend freeCodeCamp to a friend?'}
          name={'radio_recommend'}
          radio_options={radio_options}
          bind={bind_recommend}
        />
        <SurveyInputSelect
          placeholder={'Select your favorite feature'}
          label={'What is your favorite feature of freecodecamp?'}
          input_key={'select_fcc_feature'}
          key={'select_fcc_feature'}
          type='select'
          bind={bind_fcc_features}
          default_value={'Select an option'}
          required={true}
          options={select_options_fcc_features}
        />
        <SurveyInputCheckbox
          bind={bind_see_improved}
          label={'What would you like to see improved? (Check all that apply)'}
          checkbox_options={checkbox_options}
        />
        <SurveyInputTextArea
          place_holder={'Enter your comment here...'}
          bind={bind_comments_suggestions}
          label={'Any comments or suggestions?'}
          name={'comments_suggestions'}
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default Survey_Form;
