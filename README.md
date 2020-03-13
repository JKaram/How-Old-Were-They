## Actor Ages
### https://actor-ages.herokuapp.com/

Actor Ages lets a user search for an actor and find out how they were while filming a particular movie.

**This project is still a work in progress**

## Why is this useful?

That is a great question! This is my first project post graduation. I wanted more practice with React, APIs and styling. I find myself looking up this information manually and thought at least **one** other person might use it.

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/JKaram/actor-ages)

## Screenshots

![How To Use](https://raw.githubusercontent.com/JKaram/actor-ages/master/public/readme/gif_example.gif)



## Tech/framework used

<b>Built with</b>

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com)
- [Lodash](https://lodash.com/)
- [Moment](https://momentjs.com/)


## Features

<b>Search Bar</b>
* Live search for an actor. Using debounce to limit the amount of API calls while searching.

<b>API Filtering</b>
* Filtering search for more relevant actors. 
* Multiple API calls needed for name, age, photo, and list of credits.

<b>Age Calculation</b>
* Calculate age of actor while filming a movie.

## Still to come

* Animations IE Loading bar while searching, transitions.
* More filtering of search for more accurate results.
* Better styling in general. (Have lots more to learn)
* Desktop version


## Installation

### `npm install`

Install dependencies.

### `.env and Api Key`

Apply for an API key from https://www.themoviedb.org/ .<br />
Create a .env with this inside `REACT_APP_API_KEY=[*your key here*]`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

API provided by [THE MOVIE DB](https://www.themoviedb.org/).
