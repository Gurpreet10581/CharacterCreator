const router = require('express').Router();
const User = require('../db').import('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post("/signup", (req,res) => {
    User.create({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'})
            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        },
        createError = err => res.status(500).json(err)
    );
});

router.post('/signin', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }) .then(
        loginSuccess = (user) => {
            res.status(200).json({
                user: user,
                message: 'Successfully logged in!'
            })
        })
        .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;