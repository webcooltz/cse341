const express = require('express');
var router = express.Router();

const contactsController = require('../controllers/contacts');
// const Contact = require('../models/contact');

// CREATE
router.post('/', contactsController.createContact);

// todo - add batch creation?
// e.g. upload CSV file to insert many?

// READ (all)
router.get('/', contactsController.getAll);

// READ (one)
router.get('/:id', contactsController.getSingle);

// UPDATE
router.put('/:id', contactsController.updateContact);

// DELETE
router.delete('/:id', contactsController.deleteContact);

// todo - add batch deleting later?
// how: accept arrays to delete? or just use a frontend array and repeat request the /delete url

module.exports = router;