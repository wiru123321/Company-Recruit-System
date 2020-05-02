import React, {useState, useContext} from 'react';
import Decission from './Decission.jsx';
import {SurveyContext} from '../context/SurveyContext.js';

import '../../../../css/Applications.css';

const Applications = () => {
  const {applications} = useContext (SurveyContext);

  return (
    <div>
      {applications.map ((app, id) => {
        return (
          <div className="app-list">
            <PersonalData
              firstName={app.recruit.firstName}
              lastName={app.recruit.lastName}
            />
            <Status status={app.status} />
            <RecruitInfo recruit={app.recruit} />
            <Decission showForm={app.rate} id={app.id} />
          </div>
        );
      })}
    </div>
  );
};

const PersonalData = props => {
  return (
    <div>
      <h2>{props.firstName} {props.lastName}</h2>
    </div>
  );
};

const Status = props => {
  const [isShown, toggleShow] = useState (false);
  return (
    <div>
      {props.status === 'nierozpatrzony'
        ? <h3 style={{fontSize: '25px'}}>Status: {props.status} </h3>
        : <div> <h3>{props.status} </h3><button>SZCZEGÓŁY</button></div> //TO DO Dodac obsluge show
      }
    </div>
  );
};

const RecruitInfo = props => {
  const [isShown, toggleShow] = useState (false);
  return isShown
    ? <div className="show">
        <h4>SZCZEGÓŁY</h4>
        <h4>Wykształcenie: {props.recruit.educations[0]}</h4>
        <h4>Doświadczenie zawodowe</h4>
        <table>
          <thead>
            <tr>
              <th>Stanowisko</th>
              <th>Data rozpoczęcia</th>
              <th>Data zakończenia</th>
            </tr>
          </thead>
          <tbody>
            {props.recruit.empolymentExperiences.map ((elem, id) => {
              return (
                <tr key={id}>
                  <td>{elem.position}</td>
                  <td>{elem.dateFrom}</td>
                  <td>{elem.dateTo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>Umiejętności</h4>
        <table>
          <thead>
            <tr>
              <th>Umiejętność</th>
              <th>Poziom</th>
            </tr>
          </thead>
          <tbody>
            {props.recruit.skills.map ((elem, id) => {
              return (
                <tr key={id}>
                  <td>{elem.skillName}</td>
                  <td>{elem.skillLevel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>Szkolenia</h4>
        <table>
          <thead>
            <tr>
              <th>Nazwa szkolenia</th>
              <th>Data odbycia</th>
            </tr>
          </thead>
          <tbody>
            {props.recruit.trainings.map ((elem, id) => {
              return (
                <tr key={id}>
                  <td>{elem.name}</td>
                  <td>{elem.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="exit"
          onClick={event => {
            event.preventDefault ();
            toggleShow (false);
          }}
        >
          ZAMKNIJ
        </button>
      </div>
    : <div>
        <button
          onClick={event => {
            event.preventDefault ();
            toggleShow (true);
          }}
        >
          SZCZEGÓŁY
        </button>
      </div>;
};

export default Applications;
