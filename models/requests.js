var mongoose = require('mongoose');

var RequestSchema = new mongoose.Schema({
    created_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comments'
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    }],
    interested: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Tags'
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Events'
    }],
    validity: {
        type: Date,
    },
    flags: [{
        reported_by: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Users'
        },
        reason: {
            type: String,
            enum: ['Already Exists', 'Inappropriate', 'Outdated', 'Spam'],
            default: 'Spam'
        }
    }]

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Requests', RequestSchema);