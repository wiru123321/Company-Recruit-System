import React, { useState } from "react";
import CallApi from "./service/CallApi.js";
import LangParser from "../../utils/LangParser.js";
import "../../../css/RecruiterPage.css";

const FindRecruitForm = () => {
  const [applications, setApplications] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");
  const [position, setPosition] = useState("");
  return (
    <div>
      <form
        className="params"
        onSubmit={(event) => {
          event.preventDefault();
          CallApi.getAllMatchingResults(
            firstName,
            lastName,
            rate,
            result,
            status,
            position
          ).then((response) => setApplications(response.data));
        }}
      >
        <input
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          placeholder="Imie"
          name="firstName"
          value={firstName}
        />
        <input
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          placeholder="Nazwisko"
          name="lastName"
          value={lastName}
        />
        <input
          onChange={(event) => {
            setRate(event.target.value);
          }}
          placeholder="Ocena"
          name="rate"
          value={rate}
        />
        <input
          onChange={(event) => {
            setResult(event.target.value);
          }}
          placeholder="Wynik"
          name="result"
          value={result}
          type="number"
        />
        <input
          onChange={(event) => {
            setStatus(event.target.value);
          }}
          placeholder="Status"
          name="status"
          value={status}
        />
        <input
          onChange={(event) => {
            setPosition(event.target.value);
          }}
          placeholder="Stanowisko"
          name="position"
          value={position}
        />
        <input type="submit" value="Szukaj" />
      </form>
      <div>
        {applications.map((item, index) => {
          return <Recruit recruit={item.recruit} />;
        })}
      </div>
    </div>
  );
};

const Recruit = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="recruits" style={{ textAlign: "left" }}>
      <button
        onClick={(event) => {
          event.preventDefault();
          setShowDetails(!showDetails);
        }}
      >
        {props.recruit.firstName} {props.recruit.lastName}
      </button>{" "}
      <br />
      {showDetails && (
        <div>
          <label>
            {" "}
            Wykształcenie:{" "}
            {LangParser.educationParser(props.recruit.educations[0])}
          </label>{" "}
          <br />
          <label>Szkolenia: </label>
          {props.recruit.trainings.map((item, index) => {
            return (
              <li className="recruits">
                {item.name} {item.date}
              </li>
            );
          })}
          Doświadczenie zawodowe:{" "}
          {props.recruit.empolymentExperiences.map((item, index) => {
            return (
              <li className="recruits">
                {item.position} {item.dateFrom} {item.dateTo}
              </li>
            );
          })}
          Umiejętności:{" "}
          {props.recruit.skills.map((item, index) => {
            return (
              <li className="recruits">
                {item.skillName} {LangParser.skillParser(item.skillLevel)}
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FindRecruitForm;
