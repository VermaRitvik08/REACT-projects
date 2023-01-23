import React, { useEffect } from "react";
// import styled from "styled-components";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import WebPlayer from "./components/WebPlayer";
import { useStateValue } from "./utils/StateProvider";

const spotify = new SpotifyWebApi();

const App = () => {

  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }); 

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("56xZMouPrryrP8L0Pb7UTm").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  },[]); 


  return (
  <div>
    {
      token ? (
        <WebPlayer spotify={spotify}/>
      ) : (
        <Login />
      )
    }
  </div>
  );
};

export default App;

