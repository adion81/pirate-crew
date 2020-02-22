const Pirate = require('../models/pirate.model');

module.exports = {
    index: (req,res) => {
        Pirate.find()
            .then( results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    create: (req,res) => {
        Pirate.create(req.body)
            .then( result => res.json(result) )
            .catch(err => res.status(400).json(err.errors));
    },
    show: (req,res) => {
        Pirate.findById({_id:req.params.id})
            .then( result => res.json(result) )
            .catch(err => res.status(400).json(err.errors));
    },
    update: (req,res) => {
        Pirate.findOneAndUpdate({_id: req.params.id},req.body,{runValidators:true,useFindAndModify:true,context: 'query'})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors));
    },
    destroy: (req,res) => {
        Pirate.removeOne({_id: req.params.id})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors));
    }
}