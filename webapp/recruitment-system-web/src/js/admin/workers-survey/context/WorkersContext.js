import React, {useState, createContext} from 'react';

export const WorkersContext = createContext ();

const WorkersContextProvider = () => {
  return (
    <div>
      <WorkersContext.Provider>
        <p>safasf</p>
      </WorkersContext.Provider>
    </div>
  );
};

export default WorkersContextProvider;
