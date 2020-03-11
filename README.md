This project displays an example usage of a 3-headed config along with fake user authentication and role-based views.

See blog post for detailed information on this repository.

## Three Configuration Modes

This repository supports three modes for running the application set through the environment variable REACT_APP_STAGE:
- local
- dev
- production

### Local Mode
This mode is fully supported and can be run with the backend in the fake-backend directory.  To start the fake backend, follow these steps

`cd fake-backend`
`npm i -g json-server`
`npm start`

After you have installed json-server, you can simply type `npm start` in the fake-backend directory to get it going.  This directory has a db.json file which contains the catalog data.  Modifying this either through the front-end application or by editing the file manually will be watched while the json-server is running so you don't need to stop the backend to make modifications.

To start the front-end, use `npm run start:local`.  This will enable the local configuration which sets the API URL to http://localhost:3007.  If you need to run the backend on a different port, then you will need to change the start script in the fake-backend/package.json file.

#### Using Local Authentication
There are three users that can be found in src/helpers/fake-auth.js.  Use these users appropriately to test the different role-based views of admin vs. user.

### Dev Mode
Development mode (or a config setting of 'dev') enables the front-end to talk to a backend which is hosted in a development cluster.  Middleware is set in the express server so that the origin can be set to the allowed origin for the development cluster avoiding CORS issues in the browser.  If you need to modify the backend origin, make the changes in src/setupProxy.js.

The middleware is also set to debug logging to aid in development.

### Production Mode
Production mode should be set for any image that is created to run in your cluster.  This will assume that the backend configuration is hosted from the same domain as the front-end.  If this is not the case in your situation, then you will need to set the apiUrl variable in src/config.js appropriately.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

To learn how Red Hat App Dev Consulting can help your organization, contact us at https://redhat.com/services.
