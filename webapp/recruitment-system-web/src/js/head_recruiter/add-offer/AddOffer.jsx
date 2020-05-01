import React, {useState, useContext, createContext} from 'react';

const PositionContext = createContext ();

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
      value={
        ([showPositions, setShowPositions], [positionParam, setPositionParam], [
          position,
          setPosition,
        ], [description, setDescription], [listOfPositions, setListOfPositions])
      }
    >
      <PostionsNavigation />
      <AddPosition />
      <PositionsListing />
    </PositionContext.Provider>
  );
};

class PostionManagement extends React.Component {
  render () {
    return (
      <div>
        <PositionProvider />
      </div>
    );
  }
}

const PositionsListing = () => {
  const [listOfPositions, setListOfPositions] = useContext (PositionContext);
  const [showPositions, setShowPositions] = useContext (PositionContext);
  if (!showPositions && Array.isArray (listOfPositions))
    return (
      <div>
        {listOfPositions.map ((elem, id) => {
          return (
            <div>
              <label>{id}</label>
              <label>{elem.position}</label>
              <label>{elem.description}</label>
              <button
                onClick={event => {
                  event.preventDefault ();
                  // CallApi.deletePosition
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    );
  else return <div />;
};

const PostionsNavigation = () => {
  const [showPositions, setShowPositions] = useContext (PositionContext);
  const [positionParam, setPositionParam] = useContext (PositionContext);
  return (
    <div>
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

const AddPosition = () => {
  const [position, setPosition] = useContext (PositionContext);
  const [description, setDescription] = useContext (PositionContext);
  const [showPositions, setShowPositions] = useContext (PositionContext);
  if (showPositions)
    return (
      <div>
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

export default PostionManagement;
