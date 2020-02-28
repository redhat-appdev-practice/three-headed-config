import React from 'react';
import { Button, Container, Header, Segment } from 'semantic-ui-react';

const heading = props => {
  const handleLogout = () => {
    props.history.push('/login');
    props.userService.logout();
  };

  return (
    <Segment inverted style={{ padding: '1em 0em' }}>
      <Container fluid={true} style={{ height: '45px' }}>
        <Header size="huge" floated="left" inverted>
          3-Headed Config
        </Header>
        {props.userService.currentUserValue && (
          <Button
            inverted
            floated="right"
            attached="top"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </Container>
    </Segment>
  );
};

export default heading;
