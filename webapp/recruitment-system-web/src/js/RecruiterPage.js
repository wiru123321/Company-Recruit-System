import React from 'react';
import '../css/RecruiterPage.css';
import reg from '../resources/register.png';
import find from '../resources/search.png';
import help from '../resources/question.png';
import logout from '../resources/logout.png';

/* Strona rekrutera dostepna pod /recruiter*/
class RecruiterPage extends React.Component {
  render () {
    return (
      <div>
        <div>
          <ul className="navContainer menuFontStyle">
            <li>
              <ul className="personalInfoStyle">
                <li><label>Imie</label></li>
                <li><label>Nazwisko</label></li>
              </ul>
            </li>
            <li className="navContainer">
              <a><img className="imgSize" src={reg} /> Zarejestruj</a>
            </li>
            <li className="navContainer">
              <a> <img className="imgSize" src={find} /> Wyszukaj</a>
            </li>
            <li className="navContainer">
              <a className="help">
                <img className="imgSize" src={help} /> Pomoc
              </a>
            </li>
            <li className="navContainer">
              <a className="logout" href="/main">
                <img className="imgSize" src={logout} /> Wyloguj
              </a>
            </li>
            <li>
              <footer style={{marginTop: '150%', fontSize: 20}}>
                &#9400; 2020 - System Obsługi Rekrutacji
              </footer>
            </li>
          </ul>
        </div>
        <div>
          <RegisterForm />
          <FormResult />
        </div>
      </div>
    );
  }
}

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
    this.handleFirstNameChange = this.handleFirstNameChange.bind (this);
    this.handleLastNameChange = this.handleLastNameChange.bind (this);
    this.handleEducationChange = this.handleEducationChange.bind (this);
    this.handleCourseNameChange = this.handleCourseNameChange.bind (this);
    this.handleCourseDateChange = this.handleCourseDateChange.bind (this);
    this.handleJobNameChange = this.handleJobNameChange.bind (this);
    this.handleBeginDateChange = this.handleBeginDateChange.bind (this);
    this.handleEndDateChange = this.handleEndDateChange.bind (this);
    this.handleSkillNameChange = this.handleSkillNameChange.bind (this);
    this.handleSkillRatingChange = this.handleSkillRatingChange.bind (this);
    this.handleAddCourseButtonClick = this.handleAddCourseButtonClick.bind (
      this
    );
    this.handleAddExperienceButtonClick = this.handleAddExperienceButtonClick.bind (
      this
    );
    this.handleAddSkillButtonClick = this.handleAddSkillButtonClick.bind (this);
  }
  /** Change handlers */
  //#region
  handleFirstNameChange (event) {
    console.log (event.target.value);
    this.setState ({firstName: event.target.value});
  }

  handleLastNameChange (event) {
    console.log (event.target.value);
    this.setState ({lastName: event.target.value});
  }

  handleEducationChange (event) {
    console.log (event.target.value);
    this.setState ({education: event.target.value});
  }

  handleCourseNameChange (event) {
    console.log (event.target.value);
    this.setState ({course: event.target.value});
  }

  handleCourseDateChange (event) {
    console.log (event.target.value);
    this.setState ({courseDate: event.target.value});
  }

  handleJobNameChange (event) {
    console.log (event.target.value);
    this.setState ({expJobName: event.target.value});
  }

  handleBeginDateChange (event) {
    console.log (event.target.value);
    this.setState ({expBeginDate: event.target.value});
  }

  handleEndDateChange (event) {
    console.log (event.target.value);
    this.setState ({expEndDate: event.target.value});
  }

  handleSkillNameChange (event) {
    console.log (event.target.value);
    this.setState ({skillName: event.target.value});
  }

  handleSkillRatingChange (event) {
    console.log (event.target.value);
    this.setState ({skillRating: event.target.value});
  }
  //#endregion

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
  //#endregion

  render () {
    return (
      <div className="formContent">
        <h1 style={{margin: 0}}>Rejstracja danych</h1>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
            placeholder="Imie..."
          />
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
            placeholder="Nazwisko..."
          />
          <br />
          <select
            value={this.state.education}
            onChange={this.handleEducationChange}
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
            value={this.state.course}
            onChange={this.handleCourseNameChange}
            placeholder="Szkolenie..."
          />
          <input
            type="date"
            value={this.state.courseDate}
            onChange={this.handleCourseDateChange}
            placeholder="data"
          />
          <button onClick={this.handleAddCourseButtonClick}>+</button>
          <br />
          <input
            type="text"
            value={this.state.expJobName}
            onChange={this.handleJobNameChange}
            placeholder="Doświadczenie zawodowe..."
          />
          <input
            type="date"
            value={this.state.expBeginDate}
            onChange={this.handleBeginDateChange}
            placeholder="Data rozpoczęcia"
          />
          <input
            type="date"
            value={this.state.expEndDate}
            onChange={this.handleEndDateChange}
            placeholder="Data zakończenia"
          />
          <button onClick={this.handleAddExperienceButtonClick}>+</button>
          <br />
          <input
            type="text"
            value={this.state.skillName}
            onChange={this.handleSkillNameChange}
            placeholder="Umiejętności..."
          />
          <select onChange={this.handleSkillRatingChange}>
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
          <button>Zarejestruj</button>
        </form>
      </div>
    );
  }
}

function FormResult () {
  return <div className="formContent" />;
}

export default RecruiterPage;
