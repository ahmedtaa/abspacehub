import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import RocketsList from './components/rockets/RocketsList';
import Profile from './components/profile/Profile';
import DragonList from './components/dragons/DragonList';
import MissionsList from './components/missions/MissionsList';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<RocketsList />} />
        <Route path="/missions" element={<MissionsList />} />
        <Route path="/dragons" element={<DragonList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
