import React, { useState, useContext } from "react";
import axios from "axios";
import Decission from "./Decission.jsx";
import GeneratePDF from "./GeneratePDF.jsx";
import { SurveyContext } from "../context/SurveyContext.js";

import "../../../../css/Applications.css";
import DataPresentation from "./DataPresentation.jsx";

const Applications = () => {
  const { applications } = useContext(SurveyContext);
  return (
    <div className="application">
      {applications.map((item, index) => {
        return <AppUI item={item} id={item.id} />;
      })}
    </div>
  );
};

const AppUI = (props) => {
  const [componentId, setComponentId] = useState(0);
  async function resetForm() {
    setComponentId(0);
  }
  const RenderComponentByID = () => {
    if (componentId === 1) {
      return <Decission id={props.id} reset={resetForm} />;
    } else if (componentId === 2) {
      return (
        <div>
          <DataPresentation item={props.item} />
        </div>
      );
    } else if (componentId === 3) {
      return (
        <GeneratePDF
          firstName={props.item.recruit.firstName}
          lastName={props.item.recruit.lastName}
        />
      );
    } else if (componentId === 4) {
      return <div />;
    } else {
      return <div />;
    }
  };

  return (
    <div>
      <ul className="applicationNav">
        <li style={{ width: "40%" }}>
          {props.item.recruit.firstName} {props.item.recruit.lastName}
        </li>
        <li style={{ width: "30%" }}>
          {props.item.decission.result === null ? (
            <button
              onClick={(event) => {
                event.preventDefault();
                if (componentId === 1) setComponentId(0);
                else setComponentId(1);
              }}
            >
              OCENA
            </button>
          ) : (
            <div>
              OCENIONO{" "}
              {props.item.decission.result == 1 && (
                <span style={{ color: "green" }}>POZYTYWNIE</span>
              )}
              {props.item.decission.result == 0 && (
                <span style={{ color: "red" }}>NEGATYWNIE</span>
              )}
            </div>
          )}
        </li>
        <li style={{ width: "10%" }}>
          <button
            onClick={(event) => {
              event.preventDefault();
              if (componentId === 2) setComponentId(0);
              else setComponentId(2);
            }}
          >
            DANE
          </button>
        </li>
        <li style={{ width: "10%" }}>
          <button
            onClick={(event) => {
              if (componentId === 4) setComponentId(0);
              else {
                setComponentId(4);
                window.open(
                  `http://localhost:8080/head/getFile/${props.item.recruit.id}`
                );
              }
            }}
          >
            CV
          </button>
        </li>
        {props.item.decission.result !== 0 && (
          <li style={{ width: "15%" }}>
            <button
              onClick={(event) => {
                event.preventDefault();
                if (componentId === 3) setComponentId(0);
                else setComponentId(3);
              }}
            >
              UMOWA PDF
            </button>
          </li>
        )}
        <div className="simple">
          <RenderComponentByID />
        </div>
      </ul>
    </div>
  );
};

export default Applications;
