import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

const RocketsList = () => {
  const theRockets = useSelector((state) => state.rockets);
  return (
    <>
      <ul className="rockets--container">
        {theRockets.map(({
          name, description, id, images, reserved,
        }) => (
          <RocketItem
            key={id}
            id={id}
            name={name}
            description={description}
            image={images[0]}
            reserved={reserved}
          />
        ))}
      </ul>
    </>
  );
};

export default RocketsList;
