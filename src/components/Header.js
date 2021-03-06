import React from 'react';
import { NavLink } from 'react-router-dom';
import appLogo from '../images/app-logo.png';
import './header.css';

export default function Header() {
  return (
    <>
      <nav className="header">
        <div className="logo--header">
          <img className="logo--image" src={appLogo} alt="app logo" />
          <h1>Space Travellers&apos; Hub</h1>
        </div>
        <ul className="nav--all">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'underline' : 'nav--item')}
              to="/"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'underline' : 'nav--item')}
              to="/missions"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'underline' : 'nav--item')}
              to="/dragons"
            >
              Dragons
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'underline' : 'nav--item')}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}
