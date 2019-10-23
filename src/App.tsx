import React from 'react';
import logo from './logo.svg';
import './App.css';
import Survey_Form from './components/Survey_Form';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Survey_Form />
    </div>
  );
};

export default App;
