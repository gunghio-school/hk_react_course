const express = require('express');
const bodyParser = require('body-parser');
var authenticate = require('../authenticate');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all the promotions to you!');
  })
  .post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with details: ${req.body.description}`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
  })
  .delete((req, res) => {
    res.end('Deleting all promotions');
  });

promoRouter.route('/:promoId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Will send the promotion ${req.params.promoId} to you!`);
  })
  .post((req, res) => {
    res.end(`Will add the promotion ${req.params.promoId} to you!`);
  })
  .put((req, res) => {
    res.end(`Updating the promotion: ${req.params.promoId} with details: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting the promotion ${req.params.promoId}!`);
  });

module.exports = promoRouter;
