const proxy = require('http-proxy-middleware');
const BACKEND = 'http://www.example.com';

module.exports = app => {
    if (process.env.REACT_APP_STAGE === 'dev') {
        app.use('/catalog', proxy({target: BACKEND, changeOrigin: true, logLevel: 'debug'}))
    }
}