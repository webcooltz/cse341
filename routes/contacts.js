const express = require('express');
var router = express.Router();
const Contact = require('../models/contact');

// ---------------- get all -----------------
router.get('/', (req, res, next) => {
  Contact.find()
    .then(contacts => {
      console.log(contacts);
      res.status(200).json({
          message: 'Contacts fetched successfully!',
          contacts: contacts
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// ----------------- get one ----------------
router.get('/:id', (req, res, next) => {
  Contact.findOne({ id: '0' })
    .then(contact => {
      console.log(contact);
      res.status(200).json({
          message: 'Contact fetched successfully!',
          contact: contact
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

module.exports = router;