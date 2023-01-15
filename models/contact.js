var mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    _id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: false },
    favoriteColor: { type: String, required: false },
    birthday: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);