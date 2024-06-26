const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if(!err)res.send(docs);
        else console.log('erreur de recuperation des données:'+err);
    
    })
});


router.get('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id)
    
        PostsModel.findById(
            req.params.id,
            (err, docs) => {
                if(!err)res.send(docs);
                else console.log('erreur de suppression des données :' + err);
            }
        )
});


router.post('/', (req, res) => {
    //console.log(req.body);
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if(!err)res.send(docs);
        else console.log('erreur de creation de données:'+err);
    })
});

//Pour modifier les données
router.put('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID inconnu :' + req.params.id)

    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord},
        { new: true},
        (err, docs) => {
            if(!err)res.send(docs);
            else console.log('erreur avec notre update :' + err);
        }
    )
});

router.delete('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID inconnu :' + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err)res.send(docs);
            else console.log('erreur de suppression des données :' + err);
        }
    )
});

module.exports = router;