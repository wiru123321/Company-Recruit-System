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
        <h2 style={{margin: 0,fontSize:38}}>Rejstracja danych</h2>
        <br />
        <FormComponent />
      </div>
    );
  }
}

export default RegisterForm;
