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
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [role, setRole] = useState ('');
  const [department, setDepartment] = useState ('');

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

  async function update () {
    getAllWorkers ();
    filter (firstName, lastName, role, department);
  }

  async function filterRecruiter (firstName, lastName, department) {
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

    filtered = recruiters.filter (worker => {
      return (
        worker.department.toLowerCase ().indexOf (department.toLowerCase ()) !==
        -1
      );
    });

    setFilteredRecruiters (filtered);
  }

  async function filterHead (firstName, lastName, department) {
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

    filtered = head.filter (worker => {
      return (
        worker.department.toLowerCase ().indexOf (department.toLowerCase ()) !==
        -1
      );
    });

    setFilteredHeadRecruiters (filtered);
  }

  async function filter (firstName, lastName, role, department) {
    if (role === 'recruiter') {
      filterRecruiter (firstName, lastName, department);
      setFilteredHeadRecruiters (['']);
    } else if (role === 'headrecruiter') {
      filterHead (firstName, lastName, department);
      setFilteredRecruiters (['']);
    } else {
      filterRecruiter (firstName, lastName, department);
      filterHead (firstName, lastName, department);
    }
    console.log (firstName, lastName, role, department);
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
          firstName,
          setFirstName,
          lastName,
          setLastName,
          role,
          setRole,
          department,
          setDepartment,
          filter,
          update,
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
