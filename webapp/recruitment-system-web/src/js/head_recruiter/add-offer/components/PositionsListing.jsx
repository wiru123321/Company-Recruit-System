import React, {useState, useContext, createContext} from 'react';
import {PositionContext} from '../context/PositionContext';
import CallApi from '../../service/CallApi.js';
import '../../../../css/PositionsPage.css';
import {useEffect} from 'react';

const PositionsListing = () => {
  const {listOfPositions} = useContext (PositionContext);
  const {showPositions, setShowPositions} = useContext (PositionContext);
  const [positions, setPositions] = useState ([]);

  async function getPositions () {
    CallApi.getAllRecrutationProccesses ().then (response => {
      setPositions (response.data);
      console.log (response.data);
    });
  }

  useEffect (() => {
    getPositions ();
  }, []);

  if (!showPositions)
    return (
      <div>
        <div>
          <table className="pos-list">
            <thead>
              <tr>
                <th>Nr</th>
                <th>Stanowisko</th>
                <th>Ilość miejsc</th>
                <th>Wymagania</th>
              </tr>
            </thead>
            <tbody>
              {listOfPositions.map ((elem, id) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{elem.department}</td>
                    <td style={{fontSize: 'small'}}>{elem.expectedRecruits}</td>
                    <td>{elem.requirements}</td>
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
