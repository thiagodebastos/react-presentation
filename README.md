# React Presentation for Phoenix JavaScript

## Prerequisites

- Know NPM and (above beginner) JavaScript
- Know command-line
- Know Git

## Contents

Treat each of these folders as it's own web root. Each one will need an `npm install`. You can run a server if you wish, or each `index.html` can simply be opened in a browser. Remember to install webpack globally: `npm install -g webpack`

1. Hello World
 - Webpack (without react or ES6)
 - https://egghead.io/lessons/react-building-a-react-js-app-up-and-running-with-react-and-webpack

Install

```sh
cd path/to/example
npm install
webpack
```

> Open `bundle.js` file, scroll to the bottom and see the "Hello World" code wrapped in a bunch of code you didn't write (which came from Webpack)

2. First React Component
 - ES6
 - React with JSX
 - Webpack Resolve `./app`

```jsx
// JSX
<FirstComponent />

// React
React.createElement('div', null, 'Hello World');

// JS
var e = document.createElement('div');
e.innerHtml = 'Hello World'
```
