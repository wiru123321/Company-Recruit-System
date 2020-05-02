import React, {useContext} from 'react';
//import '../../../../css/SurveyOffers.css';
import SurveyContext from '../context/SurveyContext.js';

const Search = () => {
  const {paramsPosition, setParamsPosition} = useContext (SurveyContext);
  /*const {paramsStatus, setParamsStatus} = useContext (SurveyContext);
  const {paramsResult, setParamsResult} = useContext (SurveyContext);
  const {paramsRate, setParamsRate} = useContext (SurveyContext);*/
  /// const {getAppsBySearchParams} = useContext (SurveyContext);
  return (
    <div className="searchParamsForm">
      {/* <input
        placeholder="Stanowisko"
        name="position"
        onChange={event => {
          setParamsPosition (event.targer.value);
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
        onChange={event => {
          setParamsResult (event.target.value);
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
        onClick={() => {
          // getAll()
        }}
      >
        ZNAJDŹ WSZYSTKIE
      </button>*/}
    </div>
  );
};

export default Search;
