var mongoose = require('mongoose');

var TagSchema = new mongoose.Schema({
    tag_name: {
        type: String,
        required: true,
        trim: true,
    },
    tag_count: {
        type: Number,
        default: 0
    },
    related_tags: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Tags'
    }]
});

module.exports = mongoose.model('Tags', TagSchema);