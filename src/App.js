import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import './App.css';
import RocketsList from './components/rockets/RocketsList';
import Profile from './components/profile/Profile';
import DragonList from './components/dragons/DragonList';
import MissionsList from './components/missions/MissionsList';
import { loadRockets } from './redux/rockets/rockets';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRockets());
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
