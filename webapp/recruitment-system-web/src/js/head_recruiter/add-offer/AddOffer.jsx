import React, {useState, useContext, createContext} from 'react';
import '../../../css/PositionsPage.css';
import PositionProvider from './context/PositionContext';

class PostionManagement extends React.Component {
  render () {
    return (
      <div>
        <PositionProvider />
      </div>
    );
  }
}

export default PostionManagement;
