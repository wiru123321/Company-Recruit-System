import React, {useState, useContext, createContext} from 'react';
import '../../../css/PositionsPage.css';

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
                <th />
              </tr>
            </thead>
            <tbody>
              {listOfPositions.map ((elem, id) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{elem.position}</td>
                    <td>{elem.description}</td>
                    <td>
                      <button
                        onClick={event => {
                          event.preventDefault ();
                          // CallApi.deletePosition
                        }}
                      >
                        X
                      </button>
                    </td>
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

export default PostionManagement;
