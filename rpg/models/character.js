const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    charName: { type: String, required: true },
    level: { type: Number, required: true },
    inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true }],
});

module.exports = mongoose.model('Character', characterSchema);