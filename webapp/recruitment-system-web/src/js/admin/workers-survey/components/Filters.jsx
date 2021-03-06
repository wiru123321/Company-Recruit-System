import React, {useContext} from 'react';
import '../../../../css/WorkersList.css';

import {WorkersContext} from '../context/WorkersContext.js';

const Filters = () => {
  const {firstName, setFirstName} = useContext (WorkersContext);
  const {lastName, setLastName} = useContext (WorkersContext);
  const {role, setRole} = useContext (WorkersContext);
  const {department, setDepartment} = useContext (WorkersContext);
  const {filter} = useContext (WorkersContext);
  return (
    <div className="filters-nav">
      <label style={{marginTop: '5%'}}>Filtruj</label>
      <form
        onSubmit={event => {
          event.preventDefault ();
          filter (firstName, lastName, role, department);
        }}
      >
        <input
          placeholder="Imie"
          name="firstName"
          onChange={event => {
            setFirstName (event.target.value);
          }}
        />
        <input
          placeholder="Nazwisko"
          name="lastName"
          onChange={event => {
            setLastName (event.target.value);
          }}
        />
        <input
          placeholder="Stanowisko rekrutacji"
          name="department"
          onChange={event => {
            setDepartment (event.target.value);
          }}
        />
        <br /><label>Rola: </label>
        <select
          name="role"
          onChange={event => {
            setRole (event.target.value);
          }}
        >
          <option value="">-</option>
          <option value="headrecruiter">Kierownik</option>
          <option value="recruiter">Rekruter</option>
        </select>
        <input className="submit" type="submit" value="Filtruj" />
      </form>
    </div>
  );
};

export default Filters;
