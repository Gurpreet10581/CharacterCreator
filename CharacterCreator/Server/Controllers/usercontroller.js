const router = require('express').Router();
const User = require('../db').import('../Models/user');

router.post("/signup", (req,res) => {
    User.create({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        password: req.body.password
    })
    .then(
        createSuccess = (user) => {
            res.json({
                user: user,
                message: 'user created'
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