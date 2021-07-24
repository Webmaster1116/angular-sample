const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/countries');

router.get('/count', function (req, res, next) { ctrl.getItemsCount(req, res, next); })
router.get('/', function (req, res, next) { ctrl.getItems(req, res, next); });
router.get('/:id', function (req, res, next) { ctrl.getItem(req, res, next); });
router.delete('/:id', function (req, res, next) { ctrl.deleteItem(req, res, next); });
router.put('/:id', function (req, res, next) { ctrl.updateItem(req, res, next); });
router.post('/', function (req, res, next) { ctrl.createItem(req, res, next); });

router.get('/flags/:name', function (req, res, next) { ctrl.getItemImage(req, res, next); });

module.exports = router;

