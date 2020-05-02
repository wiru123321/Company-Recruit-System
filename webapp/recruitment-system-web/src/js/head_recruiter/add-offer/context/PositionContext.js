import React, {useState, useContext, createContext} from 'react';
import PositionsNavigation from '../components/PositionsNavigation.jsx';
import AddPosition from '../components/AddPosition.jsx';
import PositionsListing from '../components/PositionsListing.jsx';
import '../../../../css/PositionsPage.css';

export const PositionContext = createContext ();

const PositionProvider = () => {
  const [showPositions, setShowPositions] = useState (true);
  const [positionParam, setPositionParam] = useState ('');
  const [position, setPosition] = useState ('');
  const [description, setDescription] = useState ('');
  const [listOfPositions, setListOfPositions] = useState ([
    {id: 0, position: 'a', description: 'asfass'},
    {id: 2, position: 'a', description: 'asfass'},
  ]);

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
      }}
    >
      <PositionsNavigation />
      <AddPosition />
      <PositionsListing />
    </PositionContext.Provider>
  );
};

export default PositionProvider;
