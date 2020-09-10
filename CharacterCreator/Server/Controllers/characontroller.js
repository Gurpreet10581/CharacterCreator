const express = require('express');
const router = express.Router();
const Character = require('../db').import('../Models/character');

router.post('/', (req, res) => {
    const charaFromRequest = {
        name: req.body.name,
        species: req.body.species,
        ageInYears: req.body.age,
        description: req.body.description
    }
    Character.create(charaFromRequest)
    .then(chara => res.status(200).json(chara))
    .catch(err => res.status(500).json({error: err}))
})


module.exports = router;