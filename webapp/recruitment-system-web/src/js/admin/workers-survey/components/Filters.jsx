import React, {useState, createContext, useEffect, useContext} from 'react';
import CallApi from '../service/CallApi.js';
import '../../../../css/WorkersList.css';

import {WorkersContext} from '../context/WorkersContext.js';

const Filters = () => {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [active, setActive] = useState ('');
  const [role, setRole] = useState ('');
  const {filter} = useContext (WorkersContext);
  return (
    <div className="filters-nav">
      <label style={{marginTop: '5%'}}>Filtruj</label>
      <form
        onSubmit={event => {
          event.preventDefault ();
          filter (firstName, lastName, active, role);
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
