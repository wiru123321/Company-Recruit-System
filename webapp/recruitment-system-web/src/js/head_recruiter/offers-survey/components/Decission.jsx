import React, { useState, useContext } from "react";
import CallApi from "../../service/CallApi.js";
import "../../../../css/Applications.css";
import { SurveyContext } from "../context/SurveyContext.js";

const Decission = (props) => {
  const [description, setDescription] = useState("");
  const [jobApplicationID, setJobApplicationID] = useState(props.id);
  const [result, setResult] = useState(2);
  const [rate, setRate] = useState(0);
  const { getAppsBySearchParams } = useContext(SurveyContext);

  return (
    <div className="decission">
      <h4>OCENA</h4>
      <p>
        Wniosek został rozpatrzony{" "}
        <select
          onChange={(event) => {
            setResult(parseInt(event.target.value));
          }}
        >
          <option value="2">-</option>
          <option value="1">Pozytywnie</option>
          <option value="0">Negatywnie</option>
        </select>{" "}
        z oceną{" "}
        <input
          placeholder="ocena"
          type="number"
          onChange={(event) => {
            setRate(parseInt(event.target.value));
          }}
        />
        {"."}
      </p>
      <textarea
        placeholder="Uzasadnienie"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button
        style={{ float: "right" }}
        className="submit"
        onClick={(event) => {
          event.preventDefault();
          if (
            description !== "" &&
            result !== "" &&
            rate !== "" &&
            result !== 2
          ) {
            const dto = {
              description: description,
              jobApplicationID: jobApplicationID,
              result: result,
              rate: rate,
            };
            console.log(dto);
            CallApi.sendDecission(dto).then((response) => {
              let msg = "";
              if (result === 1) {
                msg = "pozytywnie";
              } else {
                if (result === 0) {
                  msg = "negatywnie";
                }
              }
              alert("Podanie o pracę zostało zweryfikowane " + msg);
              props.reset();
              getAppsBySearchParams();
            });
          }
        }}
      >
        PRZEŚLIJ DECYZJĘ
      </button>
    </div>
  );
};
export default Decission;
