## Actor Ages
### https://actor-ages.herokuapp.com/

Actor Ages lets you search for a movie actor  and will show how old they were while they filmed a particular movie.

**This project is still a work in progress**

## Why is this usefull?

Thats a great question! This is my first project post graduation. I wanted to practice more with React, APIs and styling. It's not particularly useful, but I find myself looking up this information manually and thought at least **one** other person might use it.

[![Node version](https://img.shields.io/node/v/[NPM-MODULE-NAME].svg?style=flat)](http://nodejs.org/download/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/JKaram/actor-ages)

## Screenshots

Include logo/demo screenshot etc.



## Tech/framework used

<b>Built with</b>

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com)
- [Lodash](https://lodash.com/)
- [Moment](https://momentjs.com/)


## Features

<b>Search Bar</b>
* Live search for an actor. Using debounce to limit the amount of api calls while searching.

<b>API Filtering</b>
* Filtering search for more relavent actors. 
* Multiple API calls needed for name, age, photo, and list of credits.

<b>Age Calculation</b>
* Calcualte age of actor while filming a movie.

## Still to come

* Animations ie. Loading bar while searching, trasitions.
* More filtering of search for more acurate results.
* Better styling in general. (Have lots more to learn)
* Desktop version


## Installation

### `npm install`

Install dependancies.

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
