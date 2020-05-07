import React, {useState, createContext, useEffect, useContext} from 'react';
import CallApi from '../service/CallApi.js';
import '../../../../css/WorkersList.css';

import {WorkersContext} from '../context/WorkersContext.js';

const WorkersListing = () => {
  const {recruiters, headRecruiters} = useContext (WorkersContext);
  return (
    <div>
      {headRecruiters.map ((elem, id) => {
        return (
          <div className="list-workers" key={id}>
            <label>{elem.type} </label>
            <label>{elem.firstName} </label>
            <label>{elem.lastName} </label>
          </div>
        );
      })}
      {recruiters.map ((elem, id) => {
        return (
          <div className="list-workers" key={id}>
            <label>{elem.type} </label>
            <label>{elem.firstName} </label>
            <label>{elem.lastName} </label>
          </div>
        );
      })}
    </div>
  );
};

export default WorkersListing;
