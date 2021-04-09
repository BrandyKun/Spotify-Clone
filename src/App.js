import { useEffect , useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Player from "./components/player/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    //code
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

        spotify.setAccessToken(_token);
        spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=> {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }
  }, []);

  console.log(token)

  return <div className="app">
    {token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;