import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './spotify';
import { useStateValue } from './StateProvider';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      // Get Authenticated User Playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });

      spotify.getPlaylist('3EEtqDscUeqwVVdx6JuMKU').then((playlist) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discoverWeekly: playlist,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
