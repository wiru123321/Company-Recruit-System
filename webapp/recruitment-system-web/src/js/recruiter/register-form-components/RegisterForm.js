import React from 'react';
import FormComponent from './FormComponent';
import '../../../css/RecruiterPage.css';

class RegisterForm extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="formContent">
        <h1 style={{margin: 0}}>Rejstracja danych</h1>
        <br />
        <FormComponent />
      </div>
    );
  }
}

export default RegisterForm;
