import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Body.css';
import Header from './Header.js';
import SongRow from './SongRow';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';

function Body({ spotify }) {
  const [{ discoverWeekly }, dispatch] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discoverWeekly?.name}</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {/* List of songs */}
        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
