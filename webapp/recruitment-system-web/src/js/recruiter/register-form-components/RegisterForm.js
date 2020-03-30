import React from 'react';
import {Form, Formik, ErrorMessage, Field} from 'formik';
import Api from './RecruitsFormService';
import '../../../css/RecruiterPage.css';

class RegisterForm extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      firstName: '',
      lastName: '',

      education: '',

      skillName: '',
      skillRating: '',

      expJobName: '',
      expBeginDate: '',
      expEndDate: '',

      course: '',
      courseDate: '',

      courses: [],
      experience: [],
      skills: [],
      wasRegisterFailed: false,
    };
    this.handleChange = this.handleChange.bind (this);
    this.handleClick = this.handleClick.bind (this);
    this.handleRegisterButtonClick = this.handleRegisterButtonClick.bind (this);
  }

  handleChange (event) {
    console.log (event.target.value);
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }
  handleClick (event) {}

  handleRegisterButtonClick (event) {
    event.preventDefault ();
    if (
      this.state.firstName != '' &&
      this.state.lastName != '' &&
      this.state.education != 'empty'
    ) {
      Api.callPersonalDataService (this.state.firstName, this.state.lastName);
      Api.callEducationService (this.state.education);
    } else {
      this.setState ({wasRegisterFailed: true});
    }
  }

  emptyPersonalDataFieldInfo () {
    if (
      (this.state.firstName == '' || this.state.lastName == '') &&
      this.state.wasRegisterFailed
    ) {
      return <div>Wypełnij pole.</div>;
    }
  }

  render () {
    return (
      <div className="formContent">
        <h1 style={{margin: 0}}>Rejstracja danych</h1>
        <br />
        <Formik>
          {props => (
            <Form>
              <fieldset>
                <Field>
                  <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="Imie..."
                  />
                </Field>
                <Field
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Nazwisko..."
                />
                {this.emptyPersonalDataFieldInfo ()}
                <br />
                <select
                  name="education"
                  value={this.state.education}
                  onChange={this.handleChange}
                >
                  <option value="empty">-</option>
                  <option value="none">brak</option>
                  <option value="primary">Podstawowe</option>
                  <option value="vocational">Zawodowe</option>
                  <option value="high_school">Średnie</option>
                  <option value="college">Wyższe</option>
                </select>
                <br />
                <input
                  type="text"
                  name="course"
                  value={this.state.course}
                  onChange={this.handleChange}
                  placeholder="Szkolenie..."
                />
                <input
                  type="date"
                  name="courseDate"
                  value={this.state.courseDate}
                  onChange={this.handleChange}
                  placeholder="data"
                />
                <button onClick={this.handleAddCourseButtonClick}>+</button>
                <br />
                <input
                  type="text"
                  name="expJobName"
                  value={this.state.expJobName}
                  onChange={this.handleChange}
                  placeholder="Doświadczenie zawodowe..."
                />
                <input
                  type="date"
                  name="expBeginDate"
                  value={this.state.expBeginDate}
                  onChange={this.handleChange}
                  placeholder="Data rozpoczęcia"
                />
                <input
                  type="date"
                  name="expEndDate"
                  value={this.state.expEndDate}
                  onChange={this.handleChange}
                  placeholder="Data zakończenia"
                />
                <button onClick={this.handleAddExperienceButtonClick}>+</button>
                <br />
                <input
                  type="text"
                  name="skillName"
                  value={this.state.skillName}
                  onChange={this.handleChange}
                  placeholder="Umiejętności..."
                />
                <select
                  name="skillRating"
                  value={this.state.skillRating}
                  onChange={this.handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button onClick={this.handleAddSkillButtonClick}>+</button>
                <br />
                <p>Tutaj pliki</p>
                <button onClick={this.handleRegisterButtonClick}>
                  Zarejestruj
                </button>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default RegisterForm;
