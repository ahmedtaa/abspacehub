import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../../redux/dragons/dragons';

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
      <section className="profileSection">
        <div className="dragonsCard">
          <h2 className="dragonsName">My Dragons</h2>
          {reserveData.map((dragon) => (
            <div key={dragon.id}>
              <h4 className="newName">{dragon.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
//   const reserveData = dragons.filter((data) => data.reserved === true && data);
//   return (
//     <>
//       <section className={styles.profileSection}>
//         <div className={styles.dragonsCard}>
//           <h2 className={styles.dragonsName}>My Rockets</h2>
//           {reserveData.map((dragon) => (
//             <div key={dragon.id}>
//               <h4 className={styles.name}>{dragon.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

export default Profile;
