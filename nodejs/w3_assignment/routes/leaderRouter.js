const express = require('express');
const bodyParser = require('body-parser');
var authenticate = require('../authenticate');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all the leaders to you!');
  })
  .post(authenticate.verifyUser, (req, res) => {
    res.end(`Will add the leader: ${req.body.name} with details: ${req.body.description}`);
  })
  .put(authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete(authenticate.verifyUser, (req, res) => {
    res.end('Deleting all leaders');
  });

leaderRouter
  .route('/:leaderId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Will send the leader ${req.params.leaderId} to you!`);
  })
  .post(authenticate.verifyUser, (req, res) => {
    res.end(`Will add the leader ${req.params.leaderId} to you!`);
  })
  .put(authenticate.verifyUser, (req, res) => {
    res.end(`Updating the leader: ${req.params.leaderId} with details: ${req.body.description}`);
  })
  .delete(authenticate.verifyUser, (req, res) => {
    res.end(`Deleting the leader ${req.params.leaderId}!`);
  });

module.exports = leaderRouter;
