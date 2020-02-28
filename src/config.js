import { fakeAuth } from './helpers/fake-auth';
import configureSSO from './helpers/sso';

const dev = {
  auth: fakeAuth,
  useSSO: false,
  apiUrl: ''
};

const prod = {
  auth: () => configureSSO(),
  useSSO: true,
  apiUrl: ''
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
  TITLE: 'Feedback 360',
  ...config
};
