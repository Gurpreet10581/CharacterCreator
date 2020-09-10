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

module.exports = router;