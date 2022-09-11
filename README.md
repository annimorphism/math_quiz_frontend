# Maths Quiz App

This project is based on ReactJS UI Framework with TypeScript.

## Features

- A User can Sign In to the Web App only using a username.
- If multiple Users are logged in then, they will see the same question until one of the User answers the question correctly.
- If multiple Users are logged in and one of them answers the question correctly then, the question changes for all Users simultaneously. This is being implemented via using WebSockets.
- Each User is awarded 10 pts for correct answer.
- LeaderBoard is also implemented, which shows the score of all the registered Users on the portal.

## First Time Setup

Maths Quiz App uses [yarn](https://yarnpkg.com/). So install yarn before running the app in development mode.

### Install Yarn

Follow the setps here [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) to download the stable version of yarn.

- To Check whether Yarn is installed successfully, run the following command in terminal:

```console
    yarn --version
```

Once Yarn is installed, then Follow the Below Steps

- Clone the Repo in the desired folder using git

```sh
git clone https://github.com/annimorphism/math_quiz_frontend.git
```

goto the project directory and run the follwing command to install all dependencies of the project.

```console
cd math_quiz_frontend
yarn install
```

- Start the Development Server using the following command

```console
    yarn start
```

This command will start the web server here
[Math Quiz App](http://127.0.0.1:3000/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `CI = false yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
And Continous Integration flag is set false.
