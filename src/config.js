import { fakeAuth } from './helpers/fake-auth';
import configureSSO from './helpers/sso';


const dev = {
  init: () => {},
  auth: fakeAuth,
  useSSO: false,
  apiUrl: 'http://www.example.com'
};

const local = {
  init: () => {},
  auth: fakeAuth,
  useSSO: false,
  apiUrl: 'http://localhost:3007'
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
  TITLE: 'VU Catalog',
  ...config
};
