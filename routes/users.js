const express = require('express');
const router = require('express').Router();

const usersController = require('../controllers/user');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);


exports = module.exports = router;