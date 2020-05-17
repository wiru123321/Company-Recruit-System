import React, {useState, useContext} from 'react';
import axios from 'axios';
import CallApi from '../../service/CallApi.js';
import '../../../../css/Applications.css';
import {SurveyContext} from '../context/SurveyContext.js';

const Decission = props => {
  const [isShown, toggleShow] = useState (false);
  const [description, setDescription] = useState ('');
  const [jobApplicationID, setJobApplicationID] = useState (props.id);
  const [result, setResult] = useState ('2');
  const [rate, setRate] = useState (0);
  const {getAppsBySearchParams, getAll} = useContext (SurveyContext);

  return (
    <div className="decission">
      <h4>OCENA</h4>
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
        style={{float: 'right'}}
        className="submit"
        onClick={event => {
          event.preventDefault ();
          const dto = {
            description: description,
            jobApplicationID: jobApplicationID,
            result: result,
            rate: rate,
          };
          if (
            description !== '' &&
            result !== '' &&
            rate !== '' &&
            result !== '2'
          ) {
            CallApi.sendDecission (dto).then (response => {
              alert (
                'Podanie o pracę zostało zweryfikowane ' + result === 0
                  ? 'negatywnie'
                  : 'pozytywnie'
              );
            });
          } else {
            console.log (dto, 'not ok');
          }
          window.location.reload (false);
        }}
      >
        PRZEŚLIJ DECYZJĘ
      </button>
    </div>
  );
};
export default Decission;
