# University List App
I create this project as simple as possible in 8 hours, but hopefully can cover the requirement(mandatory component, unit test & coverage, eslint, responsive design)
This project client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using javascript & graphql, and server was build using node js, typescript, and graphql..

## Folder Structure
In the project directory:
- university-list-app
    - src (main client app)
        - components (shared client component)
        - routes (route list)
        - middleware (client middleware eg. auth)
    - package.json (package json for client)
    - server (main server app)
        - package.json (package json for server)
        - src (main server code)
            - entity (user base entity)

## How to run 
- Go to university-list-app and run the following command bellow: 
  - `yarn`
  - `yarn start`
  - client service will running on localhost:3000
  - `cd server`
  - `yarn`
  - `yarn start`
  - server service will running on localhost:4000

## Available Scripts
In the project directory, you can run:
`yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

`yarn run test-coverage`
This command will run testing and will show unit test coverage in the command line

## Tech Stack
- React Js
- CSS (not using emotionjs or other advance styling system because it just simple project)
- Node Js
- GraphQL
- Postgres

## Features
- Mainpage (fetching university data and add search and also load more action button)
- Login 
- Register
- Subscribe
- Authentication
- Bookmark University
- Others
