// bring in mongoose so we can create a schema 
const mongoose = require("mongoose");

// we make our model 
const AnimalSchema = new mongoose.Schema({
    name: String,
    fact: String
});

// finalize setting up the model 
const Animal = mongoose.model("Animal", AnimalSchema);
// now you can use Animal.name Animal.fact

//export table to other areas of my project
module.exports = Animal;