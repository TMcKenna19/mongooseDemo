// bring in mongoose so we can create a schema 
const mongoose = require("mongoose");

// we make our model 
const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Animal name is required"],
        minLength: [2, "Animal name must be at lease two characters"]
    },
    fact: {
        type: String,
        required: [true, "Animal must have a fact"]
    } 
}, {timestamps: true});

// finalize setting up the model 
const Animal = mongoose.model("Animal", AnimalSchema);
// now you can use Animal.name Animal.fact

//export table to other areas of my project
module.exports = Animal;