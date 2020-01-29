
## ui-lib, Artifactory
It import @echo360@ui-lib
Since @echo360 is not in a public registry but in artifactory, you need to 

Artifactory npm
To fetch the component set, you will need to configure your local .npmrc to work with our private Artifactory store.

Open a terminal and enter the following command, substituting your Artifactory username and password (without the angle brackets, no space between -u and the username)

<pre><code>curl -u<username>:<password> "https://artifactory.echo360.net/artifactory/api/npm/npm/auth/echo360"</code></pre>
You should receive a response that looks something like:
<pre><code>@echo360:registry=https://artifactory.echo360.net:443/artifactory/api/npm/npm/
//artifactory.echo360.net:443/artifactory/api/npm/npm/:_password=QVAgibberish3FlRzstuffm9whatnotMxdDRX
//artifactory.echo360.net:443/artifactory/api/npm/npm/:username=flast
//artifactory.echo360.net:443/artifactory/api/npm/npm/:email=flast@echo360.com
//artifactory.echo360.net:443/artifactory/api/npm/npm/:always-auth=true</code></pre>

Copy this output and place it into ~/.npmrc.

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


### `npm run build:local`

Builds the app for local to the `build-local` folder.<br />
It bundles React in production mode and optimizes the build for the best performance.

The system will use the env.staging configuration which points to https://ccast-api.echo360local.org

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:staging`

Builds the app for staging to the `build-staging` folder.<br />
It bundles React in production mode and optimizes the build for the best performance.

The system will use the env.staging configuration which points to https://ccast-api.echo360qa.org

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build`

Builds the app for production to the `build-production` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The system will use the env.staging configuration which points to https://ccast-api.echo360qa.org

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

********************************* OLD - review if YARN should be removed *****************

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## react frontend

