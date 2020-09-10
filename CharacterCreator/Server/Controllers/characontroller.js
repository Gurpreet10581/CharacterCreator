const express = require('express');
const validateSession = require('../Middleware/validateSession');
const router = express.Router();
const Character = require('../db').import('../Models/character');

router.post('/', validateSession, (req, res) => {
    const charaFromRequest = {
        name: req.body.name,
        species: req.body.species,
        ageInYears: req.body.age,
        description: req.body.description
    }
    Character.create(charaFromRequest)
    .then((chara) => res.status(200).json({message: "Character successfully created!", chara}))
    .catch(err => res.status(500).json({error: err}))
})

router.get('/', (req, res) => {
    Character.findAll()
    .then(chara => res.status(200).json(chara))
    .catch(err => res.status(500).json({error: err}))
})

router.put('/:id',validateSession, function (req, res){
    Character.update(
        req.body, {where: 
            {id: req.params.id}
        }
    )
    .then(() => res.status(200).json({message: "Character updated."}))
    .catch(err => res.status(500).json({error: err}))
});

router.delete('/:id', validateSession, function(req, res){
    Character.destroy(
        {where: {id: req.params.id}}
    )
    .then(() => res.status(200).json({message: "Character Entry Removed."}))
    .catch(err => res.status(500).json({error: err}))
})

module.exports = router;