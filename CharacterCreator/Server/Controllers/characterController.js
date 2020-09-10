const router = express.Router();
const express = require('express');
// const validateSession = require('../middleware/validate-session');
const Journal =require('../db').import('../Models/character.js');


router.put('/update/:entryId', function (req, res){

    const updateCharacter= {
        name: req.body.journal.name,
        species: req.body.journal.species,
        ageInYears: req.body.journal.ageInYears,
        description: req.body.journal.description,

    };

    const query ={where: {id: req.params.entryId, ownerId:req.user.id}};

    Character.update(updateCharacter,query)
    .then(characters => res.status(200).json(characters))
    .catch(err => res.status(500).json({error: err}))

});

router.delete('/delete/:id',function(req, res){
    const query = {where: {id: req.params.id, ownerId: req.user.id}};

    Character.destroy(query)
    .then(() => res.status(200).json({message: "Character Entry Removed"}))
    .catch(err => res.status(500).json({error: err}))
})

