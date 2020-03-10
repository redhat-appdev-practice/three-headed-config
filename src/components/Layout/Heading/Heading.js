import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Header, Segment } from "semantic-ui-react";

const Heading = props => {
  let history = useHistory();
  const handleLogout = () => {
    props.userService.logout();
    history.push("/login");
  };

  const handleLogoClicked = () => {
    history.push("/");
  };

  return (
    <Segment inverted style={{ padding: "1em 0em" }}>
      <Container fluid={true} style={{ height: "45px" }}>
        <Header
          size="huge"
          floated="left"
          inverted
          onClick={handleLogoClicked}
          style={{ cursor: "pointer" }}
        >
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

export default Heading;
