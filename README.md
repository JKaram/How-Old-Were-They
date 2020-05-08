## Actor Ages 2.0

### https://howoldwerethey.netlify.app/

Actor Ages lets a user search for an actor and find out how they were while filming a particular movie.

**This project is still a work in progress**

## Why is this useful?

I find myself looking up this information manually and hope at least **one** other person might use it.

This is my first project post graduation. I wanted to test myself with a react project built entirely from scratch.

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/JKaram/actor-ages)

## Screenshots

![How To Use](https://github.com/JKaram/actor-ages/blob/master/public/readme/gifv3.gif)

## Features

<b>Search Bar</b>

- **Live** search for an actor. Using debounce to limit the amount of API calls

<b>API Filtering</b>

- Filtering search for more relevant actors.
- Multiple API calls needed for name, age, photo, and list of credits.

<b>Age Calculation</b>

- Calculate age of actor while filming a movie.

## Still to come

- More Animations
- More filtering of search for more accurate results.

## Installation

### `npm install`

Install dependencies.

### `.env and Api Key`

Apply for an API key from https://www.themoviedb.org/ .<br />
Create a .env with this inside `REACT_APP_MOVIEDB_API_KEY=[*your key here*]`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

API provided by [THE MOVIE DB](https://www.themoviedb.org/).
