# mern-spa-skeleton
[![Build Status](https://travis-ci.org/BadgerTek/mern-skeleton.svg?branch=master)](https://travis-ci.org/BadgerTek/mern-skeleton)

A skeleton useful for SPAs running Node, Express, React, and MongoDB.

## Prereqs
- Required
  - Node.js
  - MongoDB, running locally
- Recommended
  - Gulp, installed globally (`npm install -g gulp`)

## Setup
1. `npm install`
2. `cp .env.dev .env` to set dev env config.
3. `gulp watch` to bundle client assets and start watch.
4. `npm start` to start the server.
5. Navigate to `localhost:3000`, you should see the React entry point.

## Gulp
We use Gulp for task running. Currently Gulp takes care of testing, linting, and
building for both the client and server. Travis uses Gulp to run all the
tests and linting. Here is a quick summary of the Gulp tasks available
* `gulp` by default lints and tests (currently only tests server) the client and server then builds client.
* `gulp production` will lint, ~~test~~, then build the client using a production config.
* `gulp watch` will lint, ~~test~~, then build the client and setup a watch for any changes. Upon
changes it will repeat.
* `gulp client` will lint, ~~test~~, then build the client.
* `gulp server` runs linting on the server.
* `gulp lint` will run the linting (add `:client` or `:server` to choose only one).
* (Not implemented) `gulp test` will run the testing (add `:client` or `:server` to choose only one).

## Workflow
* TODO
