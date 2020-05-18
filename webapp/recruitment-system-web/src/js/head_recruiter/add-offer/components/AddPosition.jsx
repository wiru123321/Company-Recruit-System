import React, {useState, useContext, createContext} from 'react';
import {PositionContext} from '../context/PositionContext.js';
import CallApi from '../../service/CallApi.js';
import '../../../../css/PositionsPage.css';

const AddPosition = () => {
  const {position, setPosition} = useContext (PositionContext);
  const {getAllProcesses} = useContext (PositionContext);
  const {description, setDescription} = useContext (PositionContext);
  const {limit, setLimit} = useContext (PositionContext);
  const {showPositions, setShowPositions} = useContext (PositionContext);

  if (showPositions)
    return (
      <div className="pos-add">
        <p>Nowa oferta zatrudnienia</p> <br /><br /><br /><br />
        <form
          className="pos-form"
          onSubmit={event => {
            event.preventDefault ();
            console.log (position, description, limit);
            if (description !== '' && limit !== '')
              CallApi.startRecrutation (
                position,
                description,
                parseInt (limit)
              ).then (response => {
                alert (response.data);
                getAllProcesses ();
              });
            setPosition ('');
            setDescription ('');
            setLimit ('');
          }}
        >
          <input
            placeholder="Wymagania"
            value={description}
            name="description"
            type="text"
            onChange={event => setDescription (event.target.value)}
            required
          />
          <input
            className="slots"
            placeholder="Limit miejsc"
            value={limit}
            name="limit"
            type="number"
            onChange={event => setLimit (event.target.value)}
            required
          />

          <input className="submit" type="submit" value="Zatwierdź" />
        </form>
      </div>
    );
  else return <div />;
};

export default AddPosition;
