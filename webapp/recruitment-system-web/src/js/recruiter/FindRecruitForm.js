import React from 'react';

class FindRecruitForm extends React.Component {
  render () {
    return (
      <div>
        <p>Szukaj</p>
        <input type="text" placeholder="imie" />
        <input type="text" placeholder="nazwisko" />
      </div>
    );
  }
}

export default FindRecruitForm;
