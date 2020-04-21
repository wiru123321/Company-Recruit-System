import React from 'react';
import CallApi from '../service/CallApi';
import '../../../css/HeadRecruiterPage.css';
import '../../../css/SurveyOffers.css';

class DetailsComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      recruit: props.recruit,
      show: false,
      dropText: 'rozwiń',
    };

    this.toggleShow = this.toggleShow.bind (this);
  }
  //  TODO: refaktor
  toggleShow = () => {
    this.setState ({show: !this.state.show});
    if (this.state.show == true) {
      this.setState ({dropText: 'rozwiń'});
    } else {
      this.setState ({dropText: 'zwiń'});
    }
  };

  render () {
    return (
      <div>
        <button className="dropButton" onClick={this.toggleShow}>
          {this.state.dropText}
        </button>
        {this.state.show && getDetails (this.state.recruit)}
      </div>
    );
  }
}
// TO DO przyciac date
const getDetails = recruit => {
  return (
    <div className="listing">
      <label>Historia zatrudnienia: </label>
      <br />
      <table>
        <thead>
          <tr>
            <th>Stanowisko</th>
            <th>Od</th>
            <th>Do</th>
          </tr>
        </thead>
        <tbody>
          {recruit.empolymentExperiences.map ((exp, id) => (
            <tr>
              <th>{exp.position}</th>
              <th>{exp.dateFrom}</th>
              <th>{exp.dateTo}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <label>Wykształcenie: </label>{recruit.educations}
      <br />
      <label>Umiejętności: </label>
      <table>
        <thead>
          <tr>
            <th>Umiejętność</th>
            <th>Poziom</th>
          </tr>
        </thead>
        <tbody>
          {recruit.skills.map ((s, id) => (
            <tr>
              <th>{s.skillName}</th>
              <th>{s.skillLevel}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <label>Szkolenia: </label>
      <table>
        <thead>
          <tr>
            <th>Szkolenie</th>
            {/*<th>Opis</th>*/}
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {recruit.trainings.map ((t, id) => (
            <tr>
              <th>{t.name}</th>
              {/*<th>{t.description}</th>*/}
              <th>{t.date}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsComponent;
