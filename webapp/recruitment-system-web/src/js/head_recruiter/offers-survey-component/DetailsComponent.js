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
      {recruit.empolymentExperiences.map ((exp, id) => (
        <div>
          <label>Stanowisko:</label>
          {exp.position} Od {exp.dateFrom} do {exp.dateTo}
          <br />
        </div>
      ))}
      <label>Wykształcenie: </label>{recruit.educations}
      <label>Umiejętności: </label>
      <br />
      {recruit.skills.map ((s, id) => (
        <div> {s.skillName} {s.skillLevel} <br /> </div>
      ))}
      <label>Szkolenia: </label>
      <br />
      {recruit.trainings.map ((t, id) => (
        <div> {t.name} {t.description} {t.date} <br /> </div>
      ))}
    </div>
  );
};

export default DetailsComponent;
