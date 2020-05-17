import React, {useState} from 'react';
import CallApi from '../../service/CallApi.js';
import '../../../../css/Applications.css';
const GeneratePDF = props => {
  const [contract, setContract] = useState ('');
  const [salary, setSalary] = useState ('');
  const [dateFrom, setDateFrom] = useState ('');
  const [dateTo, setDateTo] = useState ('');
  const [isShown, toggleShow] = useState (false);
  return (
    <div className="decission">
      <h4>UMOWA</h4>
      <label>Umowa: </label>
      <select
        name="contract"
        onChange={event => {
          setContract (event.target.value);
        }}
      >
        <option value="">-</option>
        <option value="zlecenie">Zlecenie</option>
        <option value="praca">Umowa o pracę</option>
        <option value="dzielo">Umowa o dzieło</option>
        <option value="staz">Staż</option>
      </select>
      <label>Pensja: </label>
      <input
        placeholder="Pensja"
        type="number"
        name="salary"
        onChange={event => {
          setSalary (event.target.value);
        }}
      />
      <label>Początek: </label>
      <input
        placeholder="Początek umowy"
        type="date"
        name="dateFrom"
        onChange={event => {
          setDateFrom (event.target.value);
        }}
      />
      <label>Koniec: </label>
      <input
        placeholder="Koniec umowy"
        type="date"
        name="dateTo"
        onChange={event => {
          setDateTo (event.target.value);
        }}
      />
      <button
        style={{float: 'right'}}
        className="submit"
        onClick={event => {
          event.preventDefault ();
          const params = {
            firstName: props.firstName,
            lastName: props.lastName,
            contract: contract,
            salary: salary,
            dateFrom: dateFrom,
            dateTo: dateTo,
          };
          if (
            contract !== '' &&
            salary !== '' &&
            dateFrom !== '' &&
            dateTo !== ''
          )
            CallApi.createPDF (params);
        }}
      >
        GENERUJ UMOWĘ
      </button>
    </div>
  );
};

export default GeneratePDF;
