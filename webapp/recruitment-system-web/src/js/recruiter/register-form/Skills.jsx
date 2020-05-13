import React, {useState} from 'react';

const Skills = props => {
  const id = props.id;
  const [skillName, setSkillName] = useState ('');
  const [skillLevel, setSkillLevel] = useState ('');

  return (
    <div>
      <input
        onChange={event => {
          setSkillName (event.target.value);
          props.onUpdate (id, event.target.value, skillLevel);
        }}
        placeholder="Umiejętność"
        value={skillName}
      />
      <input
        onChange={event => {
          setSkillLevel (event.target.value);
          props.onUpdate (id, skillName, event.target.value);
        }}
        placeholder="Poziom"
        value={skillLevel}
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

export default Skills;