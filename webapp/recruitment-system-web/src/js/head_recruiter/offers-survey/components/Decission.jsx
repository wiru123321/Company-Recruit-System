import React, {useState} from 'react';
import CallApi from '../../service/CallApi.js';
import '../../../../css/Applications.css';
import {SurveyContext} from '../context/SurveyContext.js';
function isEqual (value, to) {
  return value === to;
}

const Decission = props => {
  const [isShown, toggleShow] = useState (false);
  const [description, setDescription] = useState ('');
  const [jobApplicationID, setJobApplicationID] = useState (props.id);
  const [result, setResult] = useState ('0');
  const [rate, setRate] = useState (0);
  //const {getAppsBySearchParams} = useContext(SurveyContext); NAPRAWIĆ
  if (
    !props.showForm.rate // POPRAWIĆ
  )
    return isShown
      ? <div className="dec show">
          <h4>DECYZJA</h4>
          <p>
            Wniosek został rozpatrzony{' '}
            <select
              onChange={event => {
                setResult (event.target.value);
              }}
            >
              <option value="2">-</option>
              <option value="1">Pozytywnie</option>
              <option value="0">Negatywnie</option>
            </select>
            {' '}z oceną{' '}
            <input
              placeholder="ocena"
              type="number"
              onChange={event => {
                setRate (parseInt (event.target.value));
              }}
            />
            {'.'}
          </p>
          <textarea
            placeholder="Uzasadnienie"
            onChange={event => {
              setDescription (event.target.value);
            }}
          />
          <button
            className="submit"
            onClick={event => {
              event.preventDefault ();
              const decission = {
                description: description,
                jobApplicationID: jobApplicationID,
                result: result,
                rate: rate,
              };
              if (
                description !== '' &&
                result !== '' &&
                rate !== '' &&
                result !== '0'
              ) {
                CallApi.sendDecission (decission).then (response => {
                  console.log (decission, 'ok');
                });
              } else {
                console.log (decission, 'not ok');
              }
              //getAppsBySearchParams ();  NAPRAWIĆ
            }}
          >
            PRZEŚLIJ DECYZJĘ
          </button>
          <button
            className="exit"
            onClick={event => {
              event.preventDefault ();
              toggleShow (false);
            }}
          >
            ZAMKNIJ
          </button>
        </div>
      : <div>
          <button
            onClick={event => {
              event.preventDefault ();
              toggleShow (true);
            }}
          >
            DECYZJA
          </button>
        </div>;
  else
    return (
      <div className="dec show">
        Decyzja została rozpatrzona
        {' '}
        {props.showForm.rate ? 'pozytywnie' : 'negatywnie'}
      </div>
    );
};
export default Decission;
/*  sendDecission (decission) {
    let dto = {
      description: decission.description, //decission.description,
      jobApplicationID: decission.jobApplicationId, // decission.jobApplicationID,
      result: decission.result,
      rate: decission.rate,
    };

    return axios ({
      method: 'post',
      url: `http://localhost:8080/head/addDecission`,
      data: dto,
    });
  }*/
