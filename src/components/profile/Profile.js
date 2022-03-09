import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../../redux/dragons/dragons';
import styles from './styles/Profile.module.css';

const Profile = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons) {
      dispatch(fetchDragons());
    }
  });

  const reserveData = dragons.filter((data) => data.reserved === true && data);
  return (
    <>
      <section className={styles.profileSection}>
        <div className={styles.dragonsCard}>
          <h2 className={styles.dragonsName}>My Rockets</h2>
          {reserveData.map((dragon) => (
            <div key={dragon.id}>
              <h4 className={styles.name}>{dragon.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profile;
