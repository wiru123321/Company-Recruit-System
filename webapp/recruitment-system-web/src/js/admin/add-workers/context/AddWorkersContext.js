import React, {createContext} from 'react';

export const AddWorkersContext = createContext ();

const AddWorkersContextProvider = () => {
  return (
    <div>
      <AddWorkersContext.Provider>
        <AddWorkerForm />
      </AddWorkersContext.Provider>
    </div>
  );
};

const AddWorkerForm = () => {
  return (
    <div>
      <form>
        <input placeholder="Imie" name="firstName" />
        <input placeholder="Nazwisko" name="lastName" />
        <input placeholder="Hasło" name="password" />
        <input placeholder="Powtórz hasło" name="rewritePassword" />
        <select name="type">
          <option value="">-</option>
          <option value="RECRUITER">Rekruter</option>
          <option value="HEAD">Kierownik</option>
        </select>
        <button
          onClick={event => {
            event.preventDefault ();
          }}
        >
          DODAJ
        </button>
      </form>
    </div>
  );
};

export default AddWorkersContextProvider;
