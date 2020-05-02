import React, {useState} from 'react';
import CallApi from '../../service/CallApi.js';
import '../../../../css/Applications.css';

const Decission = props => {
  const [isShown, toggleShow] = useState (false);
  const [decission, setDecission] = useState ({
    description: '',
    jobApplicationID: props.id,
    result: '',
    rate: 0,
  });
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
                setDecission ({result: event.target.value});
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
                setDecission ({rate: event.target.value});
              }}
            />
            {'.'}
          </p>
          <textarea
            placeholder="Uzasadnienie"
            onChange={event => {
              setDecission ({description: event.target.value});
            }}
          />
          <button
            className="submit"
            onClick={event => {
              event.preventDefault ();
              if (
                decission.description !== '' &&
                decission.result !== '' &&
                decission.rate !== ''
              ) {
                CallApi.sendDecission (decission).then (response =>
                  console.log ('okk')
                );
              }
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
