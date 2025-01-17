const express = require('express');
const router = require('express').Router();

const contactController = require('../controllers/contact');

router.get('/', contactController.getAll);

router.get('/:id', contactController.getSingle);

//add the new endpoints here
router.post('/', contactController.addContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);


module.exports = router;