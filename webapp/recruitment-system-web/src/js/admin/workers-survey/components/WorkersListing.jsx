import React, {useState, createContext, useEffect, useContext} from 'react';
import CallApi from '../service/CallApi.js';
import '../../../../css/WorkersList.css';

import {WorkersContext} from '../context/WorkersContext.js';

const WorkersListing = () => {
  const {update} = useContext (WorkersContext);
  const {filteredRecruiters, setFilteredRecruiters} = useContext (
    WorkersContext
  );
  const {filteredHeadRecruiters, setFilteredHeadRecruiters} = useContext (
    WorkersContext
  );
  return (
    <table style={{width: '80%'}}>
      <thead>
        <tr>
          <th>Imie</th>
          <th>Nazwisko</th>
          <th>Rola</th>
          <th>Stanowisko rekrutacji</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {filteredRecruiters.map ((elem, id) => {
          return (
            <tr key={id}>
              <th>{elem.firstName} </th>
              <th>{elem.lastName} </th>
              <th>{elem.type} </th>
              <th>{elem.department} </th>
              <button
                onClick={event => {
                  event.preventDefault ();
                  CallApi.remove (elem.firstName).then (response => {
                    update ();
                  });
                }}
              >
                USUŃ
              </button>
            </tr>
          );
        })}
        {filteredHeadRecruiters.map ((elem, id) => {
          return (
            <tr key={id}>
              <th>{elem.firstName} </th>
              <th>{elem.lastName} </th>
              <th>{elem.type} </th>
              <th>{elem.department} </th>
              <button
                onClick={event => {
                  event.preventDefault ();
                  CallApi.remove (elem.firstName).then (response => {
                    update ();
                  });
                }}
              >
                USUŃ
              </button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WorkersListing;
