import React, {useState} from 'react';

const Experiences = props => {
  const id = props.id;
  const [position, setPosition] = useState ('');
  const [dateFrom, setDateFrom] = useState ('');
  const [dateTo, setDateTo] = useState ('');
  return (
    <div>
      <input
        onChange={event => {
          setPosition (event.target.value);
          props.onUpdate (id, event.target.value, dateFrom, dateTo);
        }}
        type="text"
        name="position"
        placeholder="Stanowisko"
        value={position}
        required
      />
      <input
        onChange={event => {
          setDateFrom (event.target.value);
          props.onUpdate (id, position, event.target.value, dateTo);
        }}
        type="date"
        name="dateFrom"
        placeholder="Od"
        value={dateFrom}
        required
      />
      <input
        onChange={event => {
          setDateTo (event.target.value);
          props.onUpdate (id, position, dateFrom, event.target.value);
        }}
        type="date"
        name="dateTo"
        placeholder="Do"
        value={dateTo}
        required
      />
      <button
        onClick={event => {
          event.preventDefault ();
          props.onAdd ();
        }}
      >
        DODAJ
      </button>
      <button
        onClick={event => {
          event.preventDefault ();
          props.onRemove (id);
          console.log ('remove');
        }}
      >
        USUŃ
      </button>
    </div>
  );
};

export default Experiences;
