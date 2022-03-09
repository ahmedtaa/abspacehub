/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    ({ reserved }) => reserved,
  );
  const missions = useSelector((state) => state.missionsReducer).filter(
    ({ joined }) => joined,
  );
  return (
    <>
      <div className="profile--rockets">
        <h2>My Rockets</h2>
        <ul className="profile--rockets--ul">
          {rockets.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="profile--missions">
        <h2>My Missions</h2>
        <ul className="profile--missions--ul">
          {missions.map(({ mission_name, mission_id }) => (
            <li key={mission_id}>{mission_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Profile;
