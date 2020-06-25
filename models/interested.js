var mongoose = require('mongoose');

var InterestedSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    }
});

module.exports = mongoose.model('Interested', InterestedSchema);