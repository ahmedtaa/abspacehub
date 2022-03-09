import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import appLogo from '../images/app-logo.png';

export default function Header() {
  return (
    <>
      <nav className="header">
        <div className="logo--header">
          <img src={appLogo} alt="app logo" />
          <h1>Space Travellers&apos; Hub</h1>
        </div>
        <ul className="nav--all">
          <li><NavLink className="nav--item" to="/">Rockets </NavLink></li>
          <li><NavLink className="nav--item" to="/missions">Missions </NavLink></li>
          <li><NavLink className="nav--item line" to="/dragons">Dragons </NavLink></li>
          <li><NavLink className="nav--item" to="/profile">Profile </NavLink></li>
        </ul>
        <Outlet />
      </nav>
      <hr />
    </>
  );
}
