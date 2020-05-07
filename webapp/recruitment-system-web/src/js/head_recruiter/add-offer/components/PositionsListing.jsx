import React, {useState, useContext, createContext} from 'react';
import {PositionContext} from '../context/PositionContext';
import '../../../../css/PositionsPage.css';

const PositionsListing = () => {
  const {listOfPositions} = useContext (PositionContext);
  const {showPositions, setShowPositions} = useContext (PositionContext);
  if (!showPositions)
    return (
      <div>
        <div>
          <table className="pos-list">
            <thead>
              <tr>
                <th>Nr</th>
                <th>Stanowisko</th>
                <th>Opis</th>
              </tr>
            </thead>
            <tbody>
              {listOfPositions.map ((elem, id) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{elem.position}</td>
                    <td style={{fontSize: 'small'}}>{elem.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  else return <div />;
};

export default PositionsListing;
