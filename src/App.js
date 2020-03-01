import React, { Component } from 'react';
import Heading from './components/Layout/Heading/Heading';
import MainContent from './components/Layout/MainContent/MainContent';
import { Router, Route } from 'react-router-dom';
import LoginPage from './containers/Login/LoginPage';
import { history } from './helpers/history';
import UserService from './services/UserService';
import { Container } from 'semantic-ui-react';

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
    if (!this.state.currentUser && !this.props.sso) {
      history.push('/login');
    }
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Container fluid={true}>
        <Heading history={history} userService={this.userService} />
        <Router history={history}>
          {!currentUser && !this.props.sso && (
            <Route
              path="/login"
              render={props => (
                <LoginPage history={history} userService={this.userService} />
              )}
            />
          )}
          {currentUser && (
            <Route
              path="/"
              render={props => (
                <MainContent {...props} user={this.state.currentUser} />
              )}
            />
          )}
        </Router>
      </Container>
    );
  }
}

export default App;
