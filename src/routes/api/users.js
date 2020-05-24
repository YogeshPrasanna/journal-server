const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const User = mongoose.model('User')

const router = express.Router();

router.post(`/signup`, async (req, res) => {
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
                return res.status(400).json({
                    email: 'Email already exists'
                })
            } else {
                try {
                    const user = new User({ name, email, avatar, password })
                    await user.save();

                    const token = jwt.sign({
                        userId: user._id
                    }, 'MY_SECRET_KEY')

                    let username = user.name;
                    let email = user.email;
                    let avatar = user.avatar
                    return res.json({ token, username, email, avatar })

                } catch (err) {
                    return res.status(422).send(err.message)
                }
            }
        })
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ email: 'Must provide email ', password: 'must provide password' })
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ email: 'Email not found' })
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
        return res.status(400).send({ password: 'Inorrect Password' })
    }

})

module.exports = router