import React, {useState, createContext, useEffect, useContext} from 'react';
import Filters from '../components/Filters';
import WorkersListing from '../components/WorkersListing';
import CallApi from '../service/CallApi.js';
import '../../../../css/WorkersList.css';
export const WorkersContext = createContext ();

const WorkersContextProvider = () => {
  const [recruiters, setRecruiters] = useState ([]);
  const [headRecruiters, setHeadRecruiters] = useState ([]);

  async function getAllWorkers () {
    CallApi.hi ();
    CallApi.getWorkers ().then (response => {
      console.log (response.data);
      setRecruiters (response.data.recruiterList);
      setHeadRecruiters (response.data.headRecruiterList);
    });
  }

  useEffect (() => {
    getAllWorkers ();
  }, []);

  return (
    <div>
      <WorkersContext.Provider
        value={{recruiters, setRecruiters, headRecruiters, setHeadRecruiters}}
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
