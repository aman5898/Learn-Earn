var mongoose = require('mongoose');

var NotificationSchema = new mongoose.Schema({
    created_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    text: {
        type: String,
        required: true,
    },
    link: {
        type: String
    },
    seen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Notifications', NotificationSchema);