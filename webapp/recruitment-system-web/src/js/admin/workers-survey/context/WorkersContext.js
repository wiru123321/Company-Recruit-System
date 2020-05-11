import React, {useState, createContext, useEffect, useContext} from 'react';
import Filters from '../components/Filters';
import WorkersListing from '../components/WorkersListing';
import CallApi from '../service/CallApi.js';
import '../../../../css/WorkersList.css';
export const WorkersContext = createContext ();

const WorkersContextProvider = () => {
  const [recruiters, setRecruiters] = useState ([]);
  const [head, setHead] = useState ([]);
  const [filteredRecruiters, setFilteredRecruiters] = useState ([]);
  const [filteredHeadRecruiters, setFilteredHeadRecruiters] = useState ([]);

  async function getAllWorkers () {
    CallApi.hi ();
    CallApi.getWorkers ().then (response => {
      console.log (response.data);
      setRecruiters (response.data.recruiterList);
      setHead (response.data.headRecruiterList);
      setFilteredRecruiters (response.data.recruiterList);
      setFilteredHeadRecruiters (response.data.headRecruiterList);
    });
  }
  async function filterRecruiter (firstName, lastName) {
    let filtered = recruiters.filter (worker => {
      return (
        worker.firstName.toLowerCase ().indexOf (firstName.toLowerCase ()) !==
        -1
      );
    });

    filtered = filtered.filter (worker => {
      return (
        worker.lastName.toLowerCase ().indexOf (lastName.toLowerCase ()) !== -1
      );
    });

    setFilteredRecruiters (filtered);
  }

  async function filterHead (firstName, lastName) {
    let filtered = head.filter (worker => {
      return (
        worker.firstName.toLowerCase ().indexOf (firstName.toLowerCase ()) !==
        -1
      );
    });

    filtered = filtered.filter (worker => {
      return (
        worker.lastName.toLowerCase ().indexOf (lastName.toLowerCase ()) !== -1
      );
    });

    setFilteredHeadRecruiters (filtered);
  }

  async function filter (firstName, lastName, active, role) {
    if (role === 'recruiter') {
      filterRecruiter (firstName, lastName);
      setFilteredHeadRecruiters (['']);
    } else if (role === 'headrecruiter') {
      filterHead (firstName, lastName);
      setFilteredRecruiters (['']);
    } else {
      filterRecruiter (firstName, lastName);
      filterHead (firstName, lastName);
    }
    console.log (firstName, lastName, active, role);
  }
  useEffect (() => {
    getAllWorkers ();
  }, []);

  return (
    <div>
      <WorkersContext.Provider
        value={{
          filteredRecruiters,
          setFilteredRecruiters,
          filteredHeadRecruiters,
          setFilteredHeadRecruiters,
          filter,
        }}
      >
        <div>
          <Filters />
          <WorkersListing />
        </div>
      </WorkersContext.Provider>
    </div>
  );
};

export default WorkersContextProvider;
