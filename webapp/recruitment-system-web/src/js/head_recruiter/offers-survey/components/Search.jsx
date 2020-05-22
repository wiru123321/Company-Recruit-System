import React, {useContext} from 'react';
import {SurveyContext} from '../context/SurveyContext.js';

const Search = () => {
  const {paramsFirstName, setParamsFirstName} = useContext (SurveyContext);
  const {paramsLastName, setParamsLastName} = useContext (SurveyContext);
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

export default Search;
