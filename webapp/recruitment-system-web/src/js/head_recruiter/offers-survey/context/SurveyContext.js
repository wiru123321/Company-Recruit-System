import React, {useState, useContext, createContext, useEffect} from 'react';
//import Search from '../components/Search.jsx';
import Applications from '../components/Applications.jsx';
import CallApi from '../../service/CallApi.js';
import '../../../../css/SurveyOffers.css';

const applicationScheme = {
  id: '',
  position: '',
  status: '',
  decission: {result: '', description: ''},
  rate: '',
  recruit: {
    firstName: '',
    lastName: '',
    educations: [''],
    empolymentExperiences: [{dateFrom: '', dateTo: '', postion: ''}],
    skills: [{skillName: '', skillLevel: ''}],
    trainings: [{name: '', description: '', date: ''}],
  },
};

export const SurveyContext = createContext ();

const SurveyContextProvider = () => {
  const [paramsFirstName, setParamsFirstName] = useState ('');
  const [paramsLastName, setParamsLastName] = useState ('');
  const [paramsPosition, setParamsPosition] = useState ('');
  const [paramsStatus, setParamsStatus] = useState ('');
  const [paramsResult, setParamsResult] = useState ('0');
  const [paramsRate, setParamsRate] = useState ('');
  const [applications, setApplication] = useState ([]);
  async function getAllApps () {
    if (applications)
      CallApi.getAllApplications ().then (response => {
        setApplication (applications => [...response.data]);
        console.log (response.data);
      });
  }
  useEffect (() => {
    getAllApps ();
  }, []);

  const getAppsBySearchParams = () => {
    let searchParams = {
      firstName: paramsFirstName,
      lastName: paramsLastName,
      position: paramsPosition,
      status: paramsStatus,
      result: parseInt (paramsResult),
      Rate: paramsRate,
    };
    CallApi.getSpecifiedAppliacations (searchParams).then (response => {
      console.log ('specified', response.data);
      setApplication (applications => [...response.data]);
    });
  };
  const getAll = () => {
    CallApi.getAllApplications ().then (response => {
      setApplication (applications => [...response.data]);
    });
  };

  return (
    <SurveyContext.Provider
      value={{
        paramsPosition,
        setParamsPosition,
        paramsStatus,
        setParamsStatus,
        paramsResult,
        setParamsResult,
        paramsRate,
        setParamsRate,
        paramsLastName,
        setParamsLastName,
        paramsFirstName,
        setParamsFirstName,
        applications,
        setApplication,
        getAppsBySearchParams,
        getAll,
      }}
    >
      <Search />
      <Applications />
    </SurveyContext.Provider>
  );
};

const Search = () => {
  const {paramsFirstName, setParamsFirstName} = useContext (SurveyContext);
  const {paramsLastName, setParamsLastName} = useContext (SurveyContext);
  const {paramsPosition, setParamsPosition} = useContext (SurveyContext);
  const {paramsStatus, setParamsStatus} = useContext (SurveyContext);
  const {paramsResult, setParamsResult} = useContext (SurveyContext);
  const {paramsRate, setParamsRate} = useContext (SurveyContext);
  const {getAll, getAppsBySearchParams} = useContext (SurveyContext);
  return (
    <div className="searchParamsForm">
      <form
        onSubmit={event => {
          event.preventDefault ();
          getAppsBySearchParams ();
        }}
      >
        <input
          placeholder="Imię"
          value={paramsFirstName}
          name="firstName"
          onChange={event => {
            setParamsFirstName (event.target.value);
          }}
        />
        <input
          placeholder="Nazwisko"
          value={paramsLastName}
          name="lastName"
          onChange={event => {
            setParamsLastName (event.target.value);
          }}
        />
        {/*<input
          placeholder="Stanowisko"
          value={paramsPosition}
          name="position"
          onChange={event => {
            setParamsPosition (event.target.value);
          }}
        />
        <input
          placeholder="Status"
          value={paramsStatus}
          name="staus"
          onChange={event => {
            setParamsStatus (event.target.value);
          }}
        />*/}
        <label>Wynik </label>
        <select
          placeholder="Wynik"
          value={paramsResult}
          name="result"
          onChange={event => {
            setParamsResult (parseInt (event.target.value));
          }}
        >
          <option value="0">-</option>
          <option value="1">pozytywny</option>
          <option value="2">negatywny</option>
        </select>
        {/*<input
          placeholder="Ocena"
          value={paramsRate}
          name="rate"
          onChange={event => {
            setParamsRate (event.target.value);
          }}
        />*/}
        <input type="submit" value="Szukaj" />
      </form>
      <button
        onClick={event => {
          event.preventDefault ();
          getAll ();
        }}
      >
        ZNAJDŹ WSZYSTKIE
      </button>
    </div>
  );
};

export default SurveyContextProvider;
