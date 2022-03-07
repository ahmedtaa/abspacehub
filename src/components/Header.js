import React from 'react';
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
          <li className="nav--item">Rockets</li>
          <li className="nav--item">Missions</li>
          <li className="nav--item line">Dragons</li>
          <li className="nav--item">My Profile</li>
        </ul>
      </nav>
      <hr />
    </>
  );
}
