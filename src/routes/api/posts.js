const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
const Post = mongoose.model('Post')
const User = mongoose.model('User')

// validation
const validatePostInput = require('../../validation/post')

// @route GET api/posts/
// @desc  Get posts
// @access Public

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {


    Post.find({ user: req.user.id })
        .sort({ date: -1 })
        .then(posts => {
            return res.json(posts)
        })
        .catch(err => res.status(404).json({ 'noPostsFound': 'no posts found ' }))
})

// @route GET api/posts/:id
// @desc  Get post by id
// @access Public

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .sort({ date: -1 })
        .then(post => {
            return res.json(post)
        })
        .catch(err => res.status(404).json({ 'noPostFound': 'no post found with that id' }))
})


// @route DELETE api/posts/:id
// @desc  delete post by id
// @access Private

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Post.findById(req.params.id)
        .sort({ date: -1 })
        .then(post => {
            if (post.user.toString() !== req.user.id) {
                return res.status(401).json({ notAuthorised: "Not Authorised" })
            }

            post.remove().then(() => {
                return res.json({ success: true })
            }).catch(err => res.status(404).json({ postNotFound: "Post not found" }))
        })
})

// @route PUT api/posts/:id
// @desc  Update post
// @access Private
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    const { errors, isValid } = validatePostInput(req.body)

    if (!isValid) {
        res.status(400).json(errors)
    }

    Post.findById(req.params.id)
        .sort({ date: -1 })
        .then(post => {

            if (post.user.toString() !== req.user.id) {
                return res.status(401).json({ notAuthorised: "Not Authorised" })
            }

            let updatedPost = {
                user: req.user.id,
                postHeader: req.body.postHeader,
                postContent: req.body.postContent,
                postMood: {
                    happy: req.body.postMood.happy,
                    sad: req.body.postMood.sad,
                    funny: req.body.postMood.funny,
                    tired: req.body.postMood.tired,
                    bored: req.body.postMood.bored,
                    love: req.body.postMood.love,
                    blessed: req.body.postMood.blessed,
                    crying: req.body.postMood.crying,
                    angry: req.body.postMood.angry,
                    calm: req.body.postMood.calm,
                },
                postHashtags: [...req.body.postHashtags],
                memorablePost: req.body.memorablePost,
            }

            post.updateOne(updatedPost).then(() => {
                return res.json({ success: true })
            }).catch(err => res.status(404).json({ postNotFound: "Post not found or updated" }))

        })
        .catch(err => res.status(404).json({ 'noPostFound': 'no post found with that id' }))

})

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
            tired: req.body.postMood.tired,
            bored: req.body.postMood.bored,
            love: req.body.postMood.love,
            blessed: req.body.postMood.blessed,
            crying: req.body.postMood.crying,
            angry: req.body.postMood.angry,
            calm: req.body.postMood.calm,
        },
        postHashtags: [...req.body.postHashtags],
        memorablePost: req.body.memorablePost,
    })

    newPost.save().then(post => res.json(post))
})

module.exports = router
