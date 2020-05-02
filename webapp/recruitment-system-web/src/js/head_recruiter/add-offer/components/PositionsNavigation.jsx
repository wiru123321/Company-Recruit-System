import React, {useState, useContext, createContext} from 'react';
import PositionContext from '../context/PositionContext.js';
//import '../../../../css/PositionsPage.css';

const PostionsNavigation = () => {
  const {showPositions, setShowPositions} = useContext (PositionContext);
  const {positionParam, setPositionParam} = useContext (PositionContext);
  return (
    <div className="pos-nav">
      <button
        onClick={event => {
          event.preventDefault ();
          setShowPositions (true);
        }}
      >
        DODAJ OFERTĘ
      </button>
      <button
        onClick={event => {
          event.preventDefault ();
          setShowPositions (false);
        }}
      >
        PRZEGLĄDAJ OFERTY
      </button>
      {!showPositions &&
        <div>
          <input
            placeholder="Stanowisko"
            name="position"
            onChange={event => {
              console.log (positionParam);
              setPositionParam (event.target.value);
            }}
          />
          <button
            onClick={event => {
              event.preventDefault ();
              //CallApi.getPositionsBySearchParams(positionParam)
            }}
          >
            SZUKAJ
          </button>
        </div>}
    </div>
  );
};

export default PostionsNavigation;
