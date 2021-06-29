const express = require('express');
const Food = require('../models/food');
const validator = require('../middleware/validator');
const router = express.Router();
const food = new Food();



let getFood = (req, res) => {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}
let createFood = (req, res) => {
  const resObj = food.create(req.body);
  res.json(resObj);
}
let updateFood = (req, res) => {
  const resObj = food.update(req.params.id, req.body);
  res.json(resObj);
}
let deleteFood = (req, res) => {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}


router.get('/', getFood);
router.get('/:id', validator, getFood);


router.post('/', createFood);

router.put('/:id', validator, updateFood);

router.delete('/:id', deleteFood);


module.exports = router;