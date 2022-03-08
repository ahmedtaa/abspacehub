import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    ({ reserved }) => reserved,
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
    </>
  );
};

export default Profile;
