import React from 'react';
import WorkersContextProvider from './context/WorkersContext.js';

const WorkersSurvey = () => {
  return (
    <div>
      <WorkersContextProvider />
    </div>
  );
};

export default WorkersSurvey;
