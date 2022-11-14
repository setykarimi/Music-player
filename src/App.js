import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import Login from './screens/auth/login';
import Favorite from './screens/favorites/favorites';
import Feed from './screens/feed/feed';
import Home from './screens/home/home';
import Library from './screens/library/library';
import Player from './screens/player/player';
import Trending from './screens/trending/trending';
import { setClientToken } from './spotify';

function App() {
  const [token , setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    const _token = hash.split("&")[0].split("=")[1];
    if(!token && hash){
    window.localStorage.setItem("token", _token);
    setToken(_token);
    setClientToken(_token);
    }
    else{
      setToken(token);
      setClientToken(_token)
    }
  },[])
  return (!token ?
    <Login /> : 
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorite />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/player' element={<Player />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/library' element={<Library />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
