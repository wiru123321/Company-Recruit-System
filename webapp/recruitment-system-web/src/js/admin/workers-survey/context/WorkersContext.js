import React, {useState, createContext, useEffect, useContext} from 'react';
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
        <div style={{boxSizing: 'border-box'}}>
          <Filters />
          <WorkersListing />
        </div>
      </WorkersContext.Provider>
    </div>
  );
};

const Filters = () => {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [active, setActive] = useState ('');
  const [role, setRole] = useState ('');
  return (
    <div
      style={{
        float: 'left',
        boxSizing: 'border-box',
        width: '20%',
        height: '600px',
        backgroundColor: 'gray',
      }}
    >
      Filtruj
      <form>
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
        <select
          name="active"
          onChange={event => {
            setActive (event.target.value);
          }}
        >
          <option value="">-</option>
          <option value={true}>Aktywny</option>
          <option value={false}>Nieaktywny</option>
        </select>
        <select
          name="role"
          onChange={event => {
            setRole (event.target.value);
          }}
        >
          <option value="">-</option>
          <option value="HEAD">Kierownik</option>
          <option value="RECRUITER">Rekruter</option>
        </select>
        <button
          onClick={event => {
            event.preventDefault ();
          }}
        >
          FILTRUJ
        </button>
      </form>
    </div>
  );
};

const WorkersListing = () => {
  const {recruiters, headRecruiters} = useContext (WorkersContext);
  return (
    <div
      style={{
        float: 'left',
        boxSizing: 'border-box',
        width: '80%',
        height: '600px',
        backgroundColor: 'white',
      }}
    >
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

export default WorkersContextProvider;
