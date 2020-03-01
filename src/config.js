import { fakeAuth } from './helpers/fake-auth';
import configureSSO from './helpers/sso';

const dev = {
  init: () => {},
  auth: fakeAuth,
  useSSO: false,
  apiUrl: ''
};

const prod = {
  init: () => {
    configureSSO()
  },
  auth: null,
  useSSO: true,
  apiUrl: ''
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

config.init();

export default {
  TITLE: 'Feedback 360',
  ...config
};
