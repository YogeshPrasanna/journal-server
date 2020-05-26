const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postHeader: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    postMood: {
        happy: { type: Boolean },
        sad: { type: Boolean },
        funny: { type: Boolean },
        tired: { type: Boolean },
        bored: { type: Boolean },
        love: { type: Boolean },
        blessed: { type: Boolean },
        crying: { type: Boolean },
        angry: { type: Boolean },
        calm: { type: Boolean },

    },
    postHashtags: {
        type: [String],
        default: []
    },
    memorablePost: {
        type: Boolean,
        default: false
    },
    postDate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Post', PostSchema)