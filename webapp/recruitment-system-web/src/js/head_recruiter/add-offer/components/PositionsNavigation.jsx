import React, {useContext, createContext} from 'react';
import {PositionContext} from '../context/PositionContext.js';
import Find from '../../../../resources/search.png';
import CallApi from '../../service/CallApi.js';

const PostionsNavigation = () => {
  const {showPositions, setShowPositions} = useContext (PositionContext);
  const {positionParam, setPositionParam} = useContext (PositionContext);
  return (
    <div>
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
      </div>
      {!showPositions &&
        <div className="pos-search">
          <input
            placeholder="Szukaj stanowiska"
            name="position"
            onChange={event => {
              console.log (positionParam);
              setPositionParam (event.target.value);
            }}
          />
          <button
            className="pos-search"
            onClick={event => {
              event.preventDefault ();
              CallApi.getAllRecrutationProccesses ();
            }}
          >
            <img src={Find} />
          </button>
        </div>}
    </div>
  );
};

export default PostionsNavigation;
