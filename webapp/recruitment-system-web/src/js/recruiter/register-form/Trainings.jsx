import React, {useState} from 'react';

const Trainings = props => {
  const id = props.id;
  const [trainingName, setTrainingName] = useState ('');
  const [trainingDescription, setTrainingDescription] = useState ('');
  const [trainingDate, setTrainingDate] = useState ('');

  return (
    <div>
      <input
        onChange={event => {
          setTrainingName (event.target.value);
          props.onUpdate (
            id,
            event.target.value,
            trainingDescription,
            trainingDate
          );
        }}
        name="trainingName"
        placeholder="Kurs"
        value={trainingName}
        required
      />
      <input
        onChange={event => {
          setTrainingDescription (event.target.value);
          props.onUpdate (id, trainingName, event.target.value, trainingDate);
        }}
        name="trainingDescription"
        placeholder="Opis"
        value={trainingDescription}
        required
      />
      <input
        onChange={event => {
          setTrainingDate (event.target.value);
          props.onUpdate (
            id,
            trainingName,
            trainingDescription,
            event.target.value
          );
        }}
        name="trainingDate"
        type="date"
        placeholder="Data odbycia"
        value={trainingDate}
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

export default Trainings;
