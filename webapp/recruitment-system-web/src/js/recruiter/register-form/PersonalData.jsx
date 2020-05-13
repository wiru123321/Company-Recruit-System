import React from 'react';

const PersonalData = props => {
  return (
    <div>
      <input
        name="firstName"
        value={props.fName}
        onChange={props.onChange}
        placeholder="Imie"
        required
      />
      <input
        name="lastName"
        value={props.lName}
        onChange={props.onChange}
        placeholder="Nazwisko"
        required
      />
      <input
        name="department"
        value={props.department}
        onChange={props.onChange}
        placeholder="Stanowisko"
        required
      />
    </div>
  );
};

export default PersonalData;
