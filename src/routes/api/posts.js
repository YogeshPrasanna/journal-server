const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
const Post = mongoose.model('Post')

// validation
const validatePostInput = require('../../validation/post')

// @route POST api/posts/
// @desc  Create post
// @access Private

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    const { errors, isValid } = validatePostInput(req.body)

    if (!isValid) {
        res.status(400).json(errors)
    }

    const newPost = new Post({
        user: req.user.id,
        postHeader: req.body.postHeader,
        postContent: req.body.postContent,
        postMood: {
            happy: req.body.postMood.happy,
            sad: req.body.postMood.sad,
            funny: req.body.postMood.funny,
            travel: req.body.postMood.travel,
            bored: req.body.postMood.bored,
            love: req.body.postMood.love,
            blessed: req.body.postMood.blessed,
            crying: req.body.postMood.crying,
        },
        postHashtags: [...req.body.postHashtags],
        memorablePost: req.body.memorablePost,
    })

    newPost.save().then(post => res.json(post))
})

module.exports = router
