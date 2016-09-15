const express = require('express');
const router = express.Router();
const GroceryModel = require('../models/grocery.js');
const mongoose = require('mongoose');
const GroceryController = require('../controllers/GroceryController');

router.get('/', GroceryController.list);
router.get('/', GroceryController.show);
router.get('/:id/edit', GroceryController.edit);
router.post('/', GroceryController.create);
router.put('/:id', GroceryController.update);
router.delete('/:id', GroceryController.remove);

module.exports = router;
