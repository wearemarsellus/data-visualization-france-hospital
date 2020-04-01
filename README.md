# Wavlive front-end application

## Get started

### Setup the project

Install dependencies
```
npm install
```

### Start app in development mode
```
npm run dev
```
The app will start on http://localhost:3000

### Build the app

```
npm run build
```

### Lint code

```
npm run lint # eslint + stylelint
```

## Overview

App tech stack:

- [react](https://github.com/facebook/react)
- [next.js](https://github.com/zeit/next.js/)
- [grommet](https://github.com/grommet/grommet) (styling)
- [styled-components](https://github.com/styled-components/styled-components) (styling)
- [redux](https://github.com/reduxjs/redux) + [immutable.js](https://immutable-js.github.io/immutable-js/) (data management)
- [react-player](https://github.com/CookPete/react-player) (uses [hls.js](https://github.com/video-dev/hls.js/) to play tracks)
- [redux-saga](https://github.com/redux-saga/redux-saga) (to handle parallel behaviors for example in player)

### Main files and folders

- **/assets** - contains images and fonts
- **/components** - reusable app components
- **/config** - project configurations (by environments)
- **/contents** - static contents
- **/data** - static data
- **/hooks** - project custom hooks
- **/pages** - pages files (file by route, see next.js documentation). SSG logic is written here
- **/server** - server scripts. Include the script to play tracks
- **/store** - redux store. Contains actions, reducers, selectors, saga and store middlewares
  - /root - root actions, reducers, selectors
  - /entities - normalized entities
    - hospital - (actions, reducers, selectors)
    - ...
  - /interface - interface state (saved in localstorage)
- **/theme** - grommet theme custom configuration
- **/utils**
