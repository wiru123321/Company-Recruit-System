import React, {useState, useContext, createContext} from 'react';
import PositionContext from '../context/PositionContext.js';
import '../../../../css/PositionsPage.css';

const AddPosition = () => {
  const {position, setPosition} = useContext (PositionContext);
  const {description, setDescription} = useContext (PositionContext);
  const {showPositions, setShowPositions} = useContext (PositionContext);
  if (showPositions)
    return (
      <div className="pos-add">
        <input
          placeholder="Stanowisko"
          name="position"
          onChange={event => {
            setPosition (event.target.value);
          }}
        />
        <textarea
          placeholder="Opis"
          name="description"
          onChange={event => {
            setDescription (event.target.value);
          }}
        />
        <button
          onClick={event => {
            event.preventDefault ();
            console.log ('position: ', position, description);
            //CallApi.getPositionsBySearchParams(positionParam)
          }}
        >
          DODAJ
        </button>
      </div>
    );
  else return <div />;
};

export default AddPosition;
