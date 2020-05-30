import React, { useState } from "react";

const Skills = (props) => {
  const id = props.id;
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("poczatkujacy");

  return (
    <div>
      <input
        onChange={(event) => {
          setSkillName(event.target.value);
          props.onUpdate(id, event.target.value, skillLevel);
        }}
        name="skillName"
        placeholder="Umiejętność"
        value={skillName}
        required
      />
      <select
        onChange={(event) => {
          setSkillLevel(event.target.value);
          props.onUpdate(id, skillName, event.target.value);
        }}
        name="skillLevel"
        placeholder="Poziom"
        value={skillLevel}
        required
      >
        <option value="poczatkujacy">poczatkujacy</option>
        <option value="srednio-zaawansowany">srednio-zaawansowany</option>
        <option value="zaawansowany">zaawansowany</option>
        <option value="ekspert">ekspert</option>
      </select>
      <button
        onClick={(event) => {
          event.preventDefault();
          props.onAdd();
        }}
      >
        DODAJ
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          props.onRemove(id);
        }}
      >
        USUŃ
      </button>
    </div>
  );
};

export default Skills;
