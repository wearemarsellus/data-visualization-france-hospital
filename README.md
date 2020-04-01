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

### Lint the code

```
npm run lint # eslint + stylelint
```

## Overview

App tech stack:

- [react](https://github.com/facebook/react)
- [next.js](https://github.com/zeit/next.js/)
- [grommet](https://github.com/grommet/grommet) (styling)
- [styled-components](https://github.com/styled-components/styled-components) (styling)
- [redux](https://github.com/reduxjs/redux) (data management)

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
- **/theme** - grommet theme custom configuration
- **/utils**
