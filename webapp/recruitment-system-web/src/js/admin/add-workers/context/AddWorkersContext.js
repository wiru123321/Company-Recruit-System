import React, {createContext, useContext, useState} from 'react';
import '../../../../css/AddWorkersForm.css';
import CallApi from '../service/CallApi.js';
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

const ErrorMessage = props => {
  return (
    <p style={{margin: '0', color: 'red', fontSize: 'medium'}}>
      {props.message}
    </p>
  );
};

const AddWorkerForm = () => {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [password, setPassword] = useState ('');
  const [rewritePassword, setRewritePassword] = useState ('');
  const [type, setType] = useState ('');
  const [department, setDepartment] = useState ('');
  const [didSubmit, setDidSubmit] = useState (false);

  const reset = () => {
    setFirstName ('');
    setLastName ('');
    setDepartment ('');
    setPassword ('');
    setRewritePassword ('');
    setType ('');
    setDidSubmit (false);
  };

  return (
    <div className="add-worker-form">
      <p style={{marginTop: '10px', fontSize: '30px'}}> Dodaj Pracownika</p>
      <form>
        <input
          className="type-field"
          placeholder="Imie"
          name="firstName"
          value={firstName}
          onChange={event => {
            setFirstName (event.target.value);
          }}
        />
        {didSubmit &&
          firstName === '' &&
          <ErrorMessage message="Należy podać imię pracownika." />}
        <input
          className="type-field"
          placeholder="Nazwisko"
          name="lastName"
          value={lastName}
          onChange={event => {
            setLastName (event.target.value);
          }}
        />
        <input
          className="type-field"
          placeholder="Dziedzina rekrutacji"
          name="lastName"
          value={department}
          onChange={event => {
            setDepartment (event.target.value);
          }}
        />
        {didSubmit &&
          lastName === '' &&
          <ErrorMessage message="Należy podać dziedzine rekrutacji." />}
        <input
          className="type-field"
          placeholder="Hasło"
          name="password"
          value={password}
          onChange={event => {
            setPassword (event.target.value);
          }}
        />
        {didSubmit &&
          password === '' &&
          <ErrorMessage message="Należy utworzyć hasło." />}
        {didSubmit &&
          rewritePassword !== '' &&
          password !== '' &&
          rewritePassword !== password &&
          <ErrorMessage message="Hasła muszą być takie same." />}
        <input
          className="type-field"
          placeholder="Powtórz hasło"
          name="rewritePassword"
          value={rewritePassword}
          onChange={event => {
            setRewritePassword (event.target.value);
          }}
        />
        {didSubmit &&
          rewritePassword === '' &&
          <ErrorMessage message="Należy powtórzyć hasło." />}
        {didSubmit &&
          rewritePassword !== '' &&
          password !== '' &&
          rewritePassword !== password &&
          <ErrorMessage message="Hasła muszą być takie same." />}
        <select
          className="type-field"
          name="type"
          onChange={event => {
            setType (event.target.value);
          }}
          value={type}
        >
          <option value="">-</option>
          <option value="recruiter">Rekruter</option>
          <option value="headrecruiter">Kierownik</option>
        </select>
        {didSubmit &&
          type === '' &&
          <ErrorMessage message="Należy wybrać stanowisko pracownika." />}
        <button
          className="submit-field"
          onClick={event => {
            event.preventDefault ();
            let worker = {
              firstName: firstName,
              lastName: lastName,
              department: department,
              password: password,
              rewritePassword: rewritePassword,
              type: type,
            };
            setDidSubmit (true);
            if (
              firstName !== '' &&
              lastName !== '' &&
              department !== '' &&
              password !== '' &&
              rewritePassword !== '' &&
              type !== ''
            ) {
              if (password === rewritePassword) {
                console.log ('Worker', worker);
                alert (firstName + ' ' + lastName + 'został dodany/a.');
                CallApi.createWorker (worker);
                reset ();
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
