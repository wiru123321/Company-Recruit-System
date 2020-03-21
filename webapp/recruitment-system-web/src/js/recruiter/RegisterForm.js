import React from 'react';
import '../../css/RecruiterPage.css';

class RegisterForm extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      firstName: '',
      lastName: '',

      education: '',

      course: '',
      courseDate: '',

      expJobName: '',
      expBeginDate: '',
      expEndDate: '',

      skillName: '',
      skillRating: '',

      courses: [],
      experience: [],
      skills: [],
    };
    this.handleChange = this.handleChange.bind (this);

    this.handleAddCourseButtonClick = this.handleAddCourseButtonClick.bind (
      this
    );
    this.handleAddExperienceButtonClick = this.handleAddExperienceButtonClick.bind (
      this
    );
    this.handleAddSkillButtonClick = this.handleAddSkillButtonClick.bind (this);
    this.handleRegisterButtonClick = this.handleRegisterButtonClick.bind (this);
  }

  handleChange (event) {
    console.log (event.target.name);
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }

  /** Click handlers */
  //#region
  handleAddCourseButtonClick (event) {
    event.preventDefault ();
    this.state.courses.push (this.state.course, this.state.courseDate);
    console.log (this.state.course.toString (), this.state.courseDate);
  }

  handleAddExperienceButtonClick (event) {
    event.preventDefault ();
    this.state.experience.push (
      this.state.expJobName,
      this.state.expBeginDate,
      this.state.expEndDate
    );
    console.log (
      this.state.expJobName.toString (),
      this.state.expBeginDate.toString (),
      this.state.expEndDate.toString ()
    );
  }

  handleAddSkillButtonClick (event) {
    event.preventDefault ();
    this.state.skills.push (this.state.skillName, this.state.skillRating);
    console.log (
      this.state.skillName.toString (),
      this.state.skillRating.toString ()
    );
  }

  handleRegisterButtonClick (event) {
    event.preventDefault ();
    console.log (
      this.state.firstName.toString (),
      this.state.lastName.toString (),
      this.state.education.toString ()
    );
    // console.log (this.state.courses.forEach ().toString ());
    //  console.log (this.state.experience.forEach ().toString ());
    // console.log (this.state.skills.forEach ().toString ());
  }
  //#endregion

  render () {
    return (
      <div className="formContent">
        <h1 style={{margin: 0}}>Rejstracja danych</h1>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="Imie..."
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Nazwisko..."
          />
          <br />
          <select
            name="education"
            value={this.state.education}
            onChange={this.handleChange}
          >
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
          <p>pliki pliki pliki</p>
          <button onClick={this.handleRegisterButtonClick}>Zarejestruj</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
