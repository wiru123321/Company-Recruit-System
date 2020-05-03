import React, {useState, createContext, useEffect, useContext} from 'react';

export const WorkersContext = createContext ();

function worker (id, active, firstName, lastName, password, role) {
  return {
    id: id,
    active: active,
    firstName: firstName,
    lastName: lastName,
    password: password,
    role: role,
  };
}

const workersArray = [
  worker (1, true, 'Jan', 'Kowalski', '1337', 'RECRUIT'),
  worker (2, true, 'Jan', 'Kowalski', '1337', 'HEAD'),
  worker (3, true, 'Jan', 'Kowalski', '1337', 'RECRUIT'),
  worker (4, true, 'Jan', 'Kowalski', '1337', 'HEAD'),
  worker (5, true, 'Jan', 'Kowalski', '1337', 'RECRUIT'),
  worker (6, true, 'Jan', 'Kowalski', '1337', 'HEAD'),
];

const WorkersContextProvider = () => {
  const [workers, setWorkers] = useState ([]);

  async function getAllWorkers () {
    //CallApi.getAllWorkers()
    setWorkers (workers => [...workersArray]);
  }
  useEffect (() => {
    getAllWorkers ();
  }, []);

  return (
    <div>
      <WorkersContext.Provider value={{workers, setWorkers}}>
        <div style={{boxSizing: 'border-box'}}>
          <Filters />
          <WorkersListing />
        </div>
      </WorkersContext.Provider>
    </div>
  );
};

const Filters = () => {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [active, setActive] = useState ('');
  const [role, setRole] = useState ('');
  return (
    <div
      style={{
        float: 'left',
        boxSizing: 'border-box',
        width: '20%',
        height: '600px',
        backgroundColor: 'white',
      }}
    >
      Filtruj
      <form>
        <input
          placeholder="Imie"
          name="firstName"
          onChange={event => {
            setFirstName (event.target.value);
          }}
        />
        <input
          placeholder="Nazwisko"
          name="lastName"
          onChange={event => {
            setLastName (event.target.value);
          }}
        />
        <select
          name="active"
          onChange={event => {
            setActive (event.target.value);
          }}
        >
          <option value="">-</option>
          <option value={true}>Aktywny</option>
          <option value={false}>Nieaktywny</option>
        </select>
        <select
          name="role"
          onChange={event => {
            setRole (event.target.value);
          }}
        >
          <option value="">-</option>
          <option value="HEAD">Kierownik</option>
          <option value="RECRUITER">Rekruter</option>
        </select>
        <button
          onClick={event => {
            event.preventDefault ();
          }}
        >
          FILTRUJ
        </button>
      </form>
    </div>
  );
};

const WorkersListing = () => {
  const {workers} = useContext (WorkersContext);
  return (
    <div
      style={{
        float: 'left',
        boxSizing: 'border-box',
        width: '80%',
        height: '600px',
        backgroundColor: 'gray',
      }}
    >
      {workers.map ((elem, id) => {
        return <div>{elem.firstName}</div>;
      })}
    </div>
  );
};

export default WorkersContextProvider;
