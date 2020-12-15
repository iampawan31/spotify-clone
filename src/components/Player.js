import React from 'react';
import './Player.css';
import Body from './Player/Body';
import Sidebar from './Player/Sidebar';
import Footer from './Player/Footer';

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
