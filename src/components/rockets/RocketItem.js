import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rockets';
import './rockets.css';

const RocketItem = ({
  name, description, image, reserved, id,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="rocket--card">
        <img className="rocket--image" src={image} alt={name} />
        <div className="rocket--details">
          <p className="rocket--name">{name}</p>
          <p className="rocket--description">
            {(reserved)
              ? (
                <>
                  <span className="reserved--badge">Reserved</span>
                  <span>{description}</span>
                </>
              ) : description}
          </p>
          {(reserved)
            ? <button className="rocket--btn cancel--rocket" onClick={() => dispatch(cancelRocket(id))} type="button">Cancel Reservation</button>
            : <button className="rocket--btn reserve--rocket" onClick={() => dispatch(reserveRocket(id))} type="button">Reserve Rocket</button>}
        </div>
      </li>
    </>
  );
};

RocketItem.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
};

export default RocketItem;
