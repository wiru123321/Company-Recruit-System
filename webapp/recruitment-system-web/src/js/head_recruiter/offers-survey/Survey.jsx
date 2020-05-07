import React from 'react';
import SurveyContextProvider from './context/SurveyContext.js';
import Search from './components/Search.jsx';

const Survey = props => {
  return (
    <div>
      <SurveyContextProvider />

    </div>
  );
};

export default Survey;
