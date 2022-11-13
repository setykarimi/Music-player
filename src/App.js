import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import Favorite from './screens/favorites/favorites';
import Feed from './screens/feed/feed';
import Home from './screens/home/home';
import Library from './screens/library/library';
import Player from './screens/player/player';
import Trending from './screens/trending/trending';

function App() {
  return (
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
