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
        res.send("This is our user/create endpoint!")
    );
});

module.exports = router;