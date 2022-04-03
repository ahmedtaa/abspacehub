/* eslint-disable camelcase */

import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter(
    ({ reserved }) => reserved,
  );
  const missions = useSelector((state) => state.missionsReducer).filter(
    ({ joined }) => joined,
  );
  const dragons = useSelector((state) => state.dragons.dragons);

  return (
    <Container>
      <Row>
        <Col className="profile--rockets">
          <h2>My Rockets</h2>
          <ul className="profile--rockets--ul">
            {rockets.map(({ name, id }) => (
              <Card body key={id}>
                {name}
              </Card>
            ))}
          </ul>
        </Col>
        <Col className="profile--missions">
          <h2>My Missions</h2>
          <ul className="profile--missions--ul">
            {missions.map(({ mission_name, mission_id }) => (
              <Card body key={mission_id}>
                {mission_name}
              </Card>
            ))}
          </ul>
        </Col>
        <Col className="profile--dragons">
          <h2>My Dragons</h2>
          <ul className="profile--dragons--ul">
            {dragons
              ?.filter(({ reserved }) => reserved)
              .map(({ name, id }) => (
                <Card body key={id}>
                  {name}
                </Card>
              ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
