import React, {useState, useContext, createContext, useEffect} from 'react';
import Search from '../components/Search.jsx';
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

export default SurveyContextProvider;
