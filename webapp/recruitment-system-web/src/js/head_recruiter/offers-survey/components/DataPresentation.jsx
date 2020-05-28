import React from "react";
import "../../../../css/Applications.css";
import LangParser from "../../../utils/LangParser.js";
const DataPresentation = (props) => {
  return (
    <div>
      <div>
        Wykształcenie:{" "}
        {LangParser.educationParser(props.item.recruit.educations[0])}
      </div>
      <div className="presentation">
        <div>
          <table>
            <thead>
              <tr>
                <th>Umiejętność</th>
                <th>Nazwa</th>
              </tr>
            </thead>
            <tbody>
              {props.item.recruit.skills.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.skillName}</td>
                    <td>{LangParser.skillParser(e.skillLevel)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Kurs</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {props.item.recruit.trainings.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.name}</td>
                    <td>{e.date.substring(0,10)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Historia zatrudnienia</th>
                <th>Od</th>
                <th>Do</th>
              </tr>
            </thead>
            <tbody>
              {props.item.recruit.empolymentExperiences.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.position}</td>
                    <td>{e.dateFrom.substring(0,10)}</td>
                    <td>{e.dateTo.substring(0,10)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataPresentation;
