import React, { Component } from "react";
import Heading from "./components/Layout/Heading/Heading";
import MainContent from "./components/Layout/MainContent/MainContent";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./containers/Login/LoginPage";
import UserService from "./services/UserService";
import { Container } from "semantic-ui-react";
import UpdateCatalogListing from "./containers/Catalog/CatalogListing/UpdateCatalogListing/UpdateCatalogListing";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };

    this.userService = new UserService(props.auth);
  }

  componentDidMount() {
    this.userService.currentUser.subscribe(x =>
      this.setState({
        currentUser: x
      })
    );
  }

  render() {
    const { currentUser } = this.state;
    const showRedirect =
      !this.state.currentUser && !this.props.sso ? (
        <Redirect to="/login" />
      ) : null;

    return (
      <Container fluid={true}>
        <BrowserRouter>
          {showRedirect}
          <Heading userService={this.userService} />
          {!currentUser && !this.props.sso && (
            <Route
              path="/login"
              render={props => <LoginPage userService={this.userService} />}
            />
          )}
          {currentUser && (
            <Switch>
              <Route
                path="/add"
                render={props => (
                  <UpdateCatalogListing
                    {...props}
                    user={this.state.currentUser}
                  />
                )}
              />
              <Route
                path="/edit"
                render={props => (
                  <UpdateCatalogListing
                    {...props}
                    user={this.state.currentUser}
                  />
                )}
              />
              <Route
                path="/"
                exact
                render={props => (
                  <MainContent {...props} user={this.state.currentUser} />
                )}
              />
            </Switch>
          )}
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
