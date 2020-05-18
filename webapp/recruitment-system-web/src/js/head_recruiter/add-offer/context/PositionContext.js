import React, {useState, useContext, createContext, useEffect} from 'react';
import PositionsNavigation from '../components/PositionsNavigation.jsx';
import AddPosition from '../components/AddPosition.jsx';
import PositionsListing from '../components/PositionsListing.jsx';
import '../../../../css/PositionsPage.css';
import CallApi from '../../service/CallApi.js';

export const PositionContext = createContext ();

const PositionProvider = () => {
  const [showPositions, setShowPositions] = useState (true);
  const [positionParam, setPositionParam] = useState ('');
  const [position, setPosition] = useState ('');
  const [description, setDescription] = useState ('');
  const [limit, setLimit] = useState ('');
  const [listOfPositions, setListOfPositions] = useState ([]);

  async function getAllProcesses () {
    CallApi.getAllRecrutationProccesses ().then (response => {
      setListOfPositions (response.data);
      console.log (response.data);
    });
  }

  useEffect (() => {
    getAllProcesses ();
  }, []);

  return (
    <PositionContext.Provider
      value={{
        showPositions,
        setShowPositions,
        positionParam,
        setPositionParam,
        position,
        setPosition,
        description,
        setDescription,
        listOfPositions,
        setListOfPositions,
        limit,
        setLimit,
        getAllProcesses,
      }}
    >
      <PositionsNavigation />
      <AddPosition />
      <PositionsListing />
    </PositionContext.Provider>
  );
};

export default PositionProvider;
