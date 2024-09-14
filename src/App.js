import "./App.css";
import Login from "./Login";
import React, { useState, useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi  from "spotify-web-api-js";
import Player from './Player'
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); //allows us to communicate back and forth with spotify

function App() {
  const [{user, token},dispatch] = useDataLayerValue()

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token) //giving the access token to the spotify api
      //part of the spotify function, gets the users account, returns a promise
      spotify.getMe().then(user => {
        console.log('user', user)
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        })
      })
        spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(res => (
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: res,
          })
        ))
    }
  }, []);
  return <div className="app">{token ? 
    <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;

//npm install spotify-web-api-js to get the spotify wrapper