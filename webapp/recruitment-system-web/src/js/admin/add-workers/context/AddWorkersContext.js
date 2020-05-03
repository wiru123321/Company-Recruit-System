import React, {createContext, useContext, useState} from 'react';
import '../../../../css/AddWorkersForm.css';

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
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [password, setPassword] = useState ('');
  const [rewritePassword, setRewritePassword] = useState ('');
  const [type, setType] = useState ('');

  return (
    <div className="add-worker-form">
      <form>
        <input
          className="type-field"
          placeholder="Imie"
          name="firstName"
          onChange={event => {
            setFirstName (event.target.value);
          }}
        />
        <input
          className="type-field"
          placeholder="Nazwisko"
          name="lastName"
          onChange={event => {
            setLastName (event.target.value);
          }}
        />
        <input
          className="type-field"
          placeholder="Hasło"
          name="password"
          onChange={event => {
            setPassword (event.target.value);
          }}
        />
        <input
          className="type-field"
          placeholder="Powtórz hasło"
          name="rewritePassword"
          onChange={event => {
            setRewritePassword (event.target.value);
          }}
        />
        <select
          className="type-field"
          name="type"
          onChange={event => {
            setType (event.target.value);
          }}
        >
          <option value="">-</option>
          <option value="RECRUITER">Rekruter</option>
          <option value="HEAD">Kierownik</option>
        </select>
        <button
          className="submit-field"
          onClick={event => {
            event.preventDefault ();
            let worker = {
              firstName: firstName,
              lastName: lastName,
              password: password,
              rewritePassword: rewritePassword,
              type: type,
            };
            if (
              firstName !== '' &&
              lastName !== '' &&
              password !== '' &&
              rewritePassword !== '' &&
              type !== ''
            ) {
              if (password === rewritePassword) {
                console.log ('Worker', worker);
              }
            }
          }}
        >
          DODAJ
        </button>
      </form>
    </div>
  );
};

export default AddWorkersContextProvider;
