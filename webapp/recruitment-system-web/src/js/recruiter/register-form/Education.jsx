import React from 'react';

const Education = props => {
  const education = '';

  return (
    <div>
      <select onChange={props.onChange} name="education">
        <option value=""> - </option>
        <option value="wyzsze"> Wyższe </option>
        <option value="srednie"> Średnie </option>
        <option value="zawodowe"> Zawodowe </option>
      </select>
    </div>
  );
};

export default Education;
