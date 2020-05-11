import React, {useState, createContext, useEffect, useContext} from 'react';
import CallApi from '../service/CallApi.js';
import '../../../../css/WorkersList.css';

import {WorkersContext} from '../context/WorkersContext.js';

const WorkersListing = () => {
  const {filteredRecruiters, setFilteredRecruiters} = useContext (
    WorkersContext
  );
  const {filteredHeadRecruiters, setFilteredHeadRecruiters} = useContext (
    WorkersContext
  );
  return (
    <div>
      {filteredRecruiters.map ((elem, id) => {
        return (
          <div className="list-workers" key={id}>
            <label>{elem.firstName} </label>
            <label>{elem.lastName} </label>
            <label>{elem.type} </label>
          </div>
        );
      })}
      {filteredHeadRecruiters.map ((elem, id) => {
        return (
          <div className="list-workers" key={id}>
            <label>{elem.firstName} </label>
            <label>{elem.lastName} </label>
            <label>{elem.type} </label>
          </div>
        );
      })}
    </div>
  );
};

export default WorkersListing;
