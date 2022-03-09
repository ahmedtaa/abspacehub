// Actions types

const ADD_MISSION = 'missionStore/missions/ADD_MISSION';
const JOIN_MISSION = 'abspacehub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'abspacehub/missions/LEAVE_MISSION';

// actions

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const fetchData = () => (dispatch) => fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((mission) => {
      dispatch({
        type: ADD_MISSION,
        payload: {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          joined: false,
        },
      });
    });
  })
  .catch((error) => console.log(error));

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

// reducer

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });

    default:
      return state;
  }
};

export default reducer;
