var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    created_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    request: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Requests'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    event_datetime: {
        type: Date
    },
    class_link: {
        type: String,
        // validate: {
        //     validator: function(v) {
        //         return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(v);
        //     },
        //     message: 'Invalid Class Link'
        // }
    },
    recording_link: {
        type: String,
        // validate: {
        //     validator: function(v) {
        //         return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(v);
        //     },
        //     message: 'Invalid Recording Link'
        // }
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
    prerequisites: {
        tags: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Tags'
        }],
        description: {
            type: String
        }
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Events', EventSchema);