import React from 'react';
import SurveyForm from './components/SurveyForm';
import { Container } from 'reactstrap';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <SurveyForm />
    </Container>
  );
};

export default App;
