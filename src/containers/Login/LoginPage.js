import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Header, Image, Form, Segment } from "semantic-ui-react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    // redirect to home if already logged in
    if (this.props.userService.currentUserValue) {
      this.props.history.push("/");
    }
  }

  handleSubmit = async () => {
    try {
      await this.props.userService.login(this.state.email, this.state.password);
      this.props.history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            <Image src="/Logo-RedHat-D-Color-RGB.png" /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={event => this.setState({ email: event.target.value })}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />

              <Form.Button color="black" fluid size="large" type="submit">
                Login
              </Form.Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(LoginPage);
