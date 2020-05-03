import React, {createContext} from 'react';

export const AddWorkersContext = createContext ();

const AddWorkersContextProvider = () => {
  return (
    <div>
      <AddWorkersContext.Provider>
        <p>assafas</p>
      </AddWorkersContext.Provider>
    </div>
  );
};
export default AddWorkersContextProvider;
