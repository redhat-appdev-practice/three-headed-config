import { fakeAuth } from './helpers/fake-auth';
import configureSSO from './helpers/sso';


const dev = {
  init: () => {},
  auth: fakeAuth,
  useSSO: false,
  apiUrl: ''
};

const local = {
  ...dev
};

const prod = {
  init: () => {
    configureSSO()
  },
  auth: null,
  useSSO: true,
  apiUrl: ''
};

let config;

if (process.env.REACT_APP_STAGE === 'production') {
  config = prod;
} else if (process.env.REACT_APP_STAGE === 'local') {
  config = local;
} else {
  config = dev;
}

config.init();

export default {
  TITLE: 'Feedback 360',
  ...config
};
