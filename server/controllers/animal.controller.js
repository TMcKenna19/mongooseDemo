// controllers will handle logic for each model 

// bring in Animal model 
const Animal = require("../models/animal.model");

// basic CRUD commands below

//CREATE
module.exports.createAnimal = (req, res) => {
    Animal.create(req.body)
    .then(newAnimal => res.json(newAnimal))
    .catch(err => res.json({message: "Error-> createAnimal", error: err}))
}

//READ ONE 
module.exports.findOneAnimal = (req, res) => {
    Animal.find({_id: req.params._id})
    .then(singleAnimal => res.json(singleAnimal))
    .catch(err => res.json({message: "Error-> findOneAnimal", error: err}))
}

//READ ALL 
module.exports.findAllAnimals = (req, res) => {
    Animal.find()
    .then(allAnimal => res.json(allAnimal))
    .catch(err => res.json({message: "Error-> findAllAnimals", error: err}))
}

//UPDATE 
module.exports.updateAnimal = (req, res) => {
    Animal.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
    .then(updateAnimal => res.json(updateAnimal))
    .catch(err => res.json({message: "Error-> updateAnimal", error: err}))
}

//DELETE
module.exports.deleteAnimal = (req, res) => {
    Animal.deleteOne({_id: req.params._id})
    .then(deleteAnimal => res.json(deleteAnimal))
    .catch(err => res.json({message: "Error-> deleteAnimal", error: err}))
}