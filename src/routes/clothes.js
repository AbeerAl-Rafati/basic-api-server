const express = require('express');
const Clothes = require('../models/clothes');
const validator = require('../middleware/validator');
const router = express.Router();
const clothes = new Clothes();





let getClothes = (req, res) => {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}

let createClothes = (req, res) => {

  const resObj = clothes.create(req.body);
  res.json(resObj);
}

let updateClothes = (req, res) => {

  const resObj = clothes.update(req.params.id, req.body);
  res.json(resObj);
}

let deleteClothes = (req, res) => {

  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}


router.get('/', getClothes);
router.get('/:id', validator, getClothes);


router.post('/', createClothes);

router.put('/:id', validator, updateClothes);

router.delete('/:id', validator, deleteClothes);


module.exports = router;