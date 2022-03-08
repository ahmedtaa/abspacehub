import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/missions/missions';
import Header from './components/Header';
import RocketsList from './components/rockets/RocketsList';
import Profile from './components/profile/Profile';
import DragonList from './components/dragons/DragonList';
import MissionsList from './components/missions/MissionsList';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<RocketsList />} />
        <Route path="/missions" element={<MissionsList />} />
        <Route path="/dragons" element={<DragonList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
