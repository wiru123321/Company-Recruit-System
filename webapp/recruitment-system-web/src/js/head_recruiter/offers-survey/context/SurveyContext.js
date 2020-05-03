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
  const [paramsPosition, setParamsPosition] = useState ('');
  const [paramsStatus, setParamsStatus] = useState ('');
  const [paramsResult, setParamsResult] = useState ('');
  const [paramsRate, setParamsRate] = useState ('');
  const [applications, setApplication] = useState ([]);
  async function getAllApps () {
    if (applications)
      CallApi.getAllApplications ().then (response => {
        setApplication (applications => [...response.data]);
        console.log ('getx', response.data);
      });
  }
  useEffect (() => {
    getAllApps ();
  });

  const getAppsBySearchParams = () => {
    let searchParams = {
      position: paramsPosition,
      status: paramsStatus,
      result: parseInt (paramsResult),
      Rate: paramsRate,
    };
    CallApi.getSpecifiedAppliacations (searchParams).then (response => {
      console.log (response.data);
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
        applications,
        setApplication,
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
  const {paramsPosition, setParamsPosition} = useContext (SurveyContext);
  const {paramsStatus, setParamsStatus} = useContext (SurveyContext);
  const {paramsResult, setParamsResult} = useContext (SurveyContext);
  const {paramsRate, setParamsRate} = useContext (SurveyContext);
  const {getAll, getAppsBySearchParams} = useContext (SurveyContext);
  return (
    <div className="searchParamsForm">
      <input
        placeholder="Stanowisko"
        name="position"
        onChange={event => {
          setParamsPosition (event.target.value);
        }}
      /><input
        placeholder="Status"
        onChange={event => {
          setParamsStatus (event.target.value);
        }}
      />
      <input
        placeholder="Wynik"
        name="result"
        type="number"
        onChange={event => {
          setParamsResult (parseInt (event.target.value));
        }}
      />
      <input
        placeholder="Ocena"
        name="rate"
        onChange={event => {
          setParamsRate (event.target.value);
        }}
      />
      <button
        onClick={() => {
          getAppsBySearchParams ();
        }}
      >
        SZUKAJ
      </button>
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
