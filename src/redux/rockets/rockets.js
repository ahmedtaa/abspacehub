/* eslint-disable max-len */
const LOAD_ROCKETS = 'abspacehub/rockets/LOAD_ROCKETS';
const RESERVE_ROCKET = 'abspacehub/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'abspacehub/rockets/CANCEL_ROCKET';

const initialState = [];
const fetchURL = 'https://api.spacexdata.com/v3/rockets';

export const loadRockets = () => async (dispatch) => {
  const response = await fetch(fetchURL);
  const result = await response.json();
  const payload = result.map(
    ({
      id, rocket_name: name, description, flickr_images: images,
    }) => ({
      id,
      name,
      description,
      images,
      reserved: false,
    }),
  );
  dispatch({
    type: LOAD_ROCKETS,
    payload,
  });
};

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;

    case RESERVE_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload ? { ...rocket, reserved: true } : rocket));
    case CANCEL_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload ? { ...rocket, reserved: false } : rocket));
    default:
      return state;
  }
};

export default rocketsReducer;
