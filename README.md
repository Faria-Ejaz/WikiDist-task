![enter image description here](https://assets.website-files.com/6165cc08812f5858748c118c/61efe2515fbc89e1fd313373_passfort-moodys-primarylogo.svg)

# Wiki Coding Task

A description of the wiki follows:

 - A wiki is a collection of **documents**
 - **Documents** are lumps of plain text. No graphics, attachments, or formatting Each **documents** is uniquely identified by a **title** that is a maximum of 50 characters in length. This title does not change for the life of a document
 - A **documents** can have multiple **revisions**, as it is updated over time. We store all historical revisions of a document
 -  We should be able to view the **documents** as it was at any point in time. I.e. we can use any timestamp to fetch a **revision** e.g. If we have a document at time 1pm and time 3pm, then sending a timestamp of 2pm should return the document as it was at time 1pm.
 
# / server

Following commands are for **macOS** users: 

 1. open WikiDist/server/run.sh file and add path to the directory `cd '[PATH TO DIRECTOTY]/WikiDist-task/server'`
 2. Open terminal and go to WikiDist-task/server directory and run `sh run.sh` command this will run the  following commands. 

  ### /run.sh
    virtualenv flask
    cd flask
    source bin/activate
    pip3 install -U flask-cors
    cd '[PATH TO DIRECTOTY]/WikiDist-task/server'
    python3 wiki.py

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run cypress`

This script will open cypress.io window and you can choose  your preferred browser 
for E2E testing and start the cypress test but before that go to 
`cypress/e2e/homePage.cy.js` and change the local host address Port
`cy.visit('http://localhost:3002/')` in which the react app is running.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# /server


