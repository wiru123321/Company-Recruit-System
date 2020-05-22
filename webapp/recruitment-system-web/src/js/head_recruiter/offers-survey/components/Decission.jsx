import React, {useState, useContext} from 'react';
import CallApi from '../../service/CallApi.js';
import '../../../../css/Applications.css';
import {SurveyContext} from '../context/SurveyContext.js';

const Decission = props => {
  const [description, setDescription] = useState ('');
  const [jobApplicationID] = useState (props.id);
  const [result, setResult] = useState ('2');
  const [rate, setRate] = useState (0);
  const {getAppsBySearchParams} = useContext (SurveyContext);

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
              const msg = () => {
                if (result === 1) return 'negatywnie';
                else return 'pozytywnie';
              };
              alert ('Podanie o pracę zostało zweryfikowane ' + msg ());
              props.reset ();
              getAppsBySearchParams ();
            });
          }
        }}
      >
        PRZEŚLIJ DECYZJĘ
      </button>
    </div>
  );
};
export default Decission;
