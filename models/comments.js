var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    created_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    text: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['event', 'request']
    },
    event_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Events'
    },
    request_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Requests'
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Comments', CommentSchema);