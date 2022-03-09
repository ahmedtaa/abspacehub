import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { joinMission, leaveMission } from '../../redux/missions/missions';

export default function MissionsList() {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Discription</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              {mission.joined ? (
                <Badge bg="primary">Active Member</Badge>
              ) : (
                <Badge bg="secondary">NOT S MEMBER</Badge>
              )}
            </td>
            <td>
              {mission.joined ? (
                <Button
                  variant="outline-danger"
                  onClick={() => dispatch(leaveMission(mission.mission_id))}
                  type="button"
                >
                  Leave Mission
                </Button>
              ) : (
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    dispatch(joinMission(mission.mission_id));
                  }}
                  type="button"
                >
                  Join Mission
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
