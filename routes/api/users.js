const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const User = mongoose.model('User')
const passport = require('passport')
const validateSignupInput = require('../../validation/singup')
const validateSigninInput = require('../../validation/signin')


const router = express.Router();

router.post(`/signup`, async (req, res) => {

    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    console.log(req.body)
    const { name, email, password } = req.body;
    const avatar = gravatar.url(email, {
        s: '200', //size
        r: 'pg', // Rating
        d: 'mm' //default
    })

    await User.findOne({ email: req.body.email })
        .then(async user => {
            if (user) {
                errors.email = "Email already exist"
                return res.status(400).json(errors)
            } else {
                try {
                    const user = new User({ name, email, avatar, password })
                    await user.save();

                    const token = jwt.sign({
                        userId: user._id
                    }, 'MY_SECRET_KEY')

                    if (user) {
                        let { id, name, email, avatar } = user;
                        return res.json({ token, id, name, email, avatar })

                    }
                } catch (err) {
                    return res.status(422).send(err.message)
                }
            }
        })
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const { errors, isValid } = validateSigninInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    if (!email || !password) {
        return res.status(422).json({ email: 'Must provide email ', password: 'must provide password' })
    }

    const user = await User.findOne({ email });

    if (!user) {
        errors.email = "Email not found"
        return res.status(404).json(errors)
    }

    try {
        await user.comparePassword(password)

        const payload = {
            id: user._id,
            name: user.name,
            avatar: user.avatar,
        }

        const token = jwt.sign(payload, process.env.secretKEY, { expiresIn: 3600 });
        // res.send({
        //     success: true,
        //     token: `Bearer ${token}`
        // })

        return res.json({ ...payload, token: `Bearer ${token}` })
    } catch (err) {
        errors.password = "Incorrect password"
        return res.status(400).json(errors)
    }
})

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { _id, name, email, avatar } = req.user;
    res.json({
        _id, name, email, avatar
    })
})

module.exports = router