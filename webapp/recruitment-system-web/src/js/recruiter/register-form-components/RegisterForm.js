import React from 'react';
import CoursesComponent from './CoursesComponent';
import NameComponent from './NameComponent';
import EducationComponent from './EducationComponent';
import Api from './RecruitsFormService';
import '../../../css/RecruiterPage.css';

class RegisterForm extends React.Component {
  constructor (props) {
    super (props);

    this.state = {};
  }

  render () {
    return (
      <div className="formContent">
        <h1 style={{margin: 0}}>Rejstracja danych</h1>
        <br />
        <NameComponent />
        <CoursesComponent />
        <EducationComponent />
      </div>
    );
  }
}

export default RegisterForm;
