// this page will handel the database configuartion and connection 
// we need mongoose 
const mongoose = require("mongoose");


// we need to connect to our database "mongodb://localhost/name_of_db" 
mongoose.connect("mongodb://localhost/mongo_demo_db", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("** the mongoose has been found **"))
    .catch(err=> console.log("mongoose error connecting to database > ", err))