import React from 'react';
import './Login.css';
import { loginUrl } from '../spotify';

function Login() {
  return (
    <div className="login">
      <div className="logo">
        <img src="./images/logos/Spotify_Logo_RGB_White.png" alt="" />
      </div>
      <div className="loginButton">
        <a href={loginUrl}>Login with Spotify</a>
      </div>
    </div>
  );
}

export default Login;
