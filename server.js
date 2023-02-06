const express = require("express");
const app = express();
const port = 8000;

// add this line after mongoose.config set up
require("./server/config/mongoose.config");

// must have when working with post data 
app.use(express.json(), express.urlencoded({extended: true}));

// make sure this line comes after the parsing line
const AllMyRoutes = require("./server/routes/animal.routes");
AllMyRoutes(app);



app.listen(port, () => console.log(`** running on port ${port} **`));

/**
 * server - This is your backend server / project folder and will hold all server related files
    config - will handle the database configuration and connection
    controllers - will hold all logic for each model (CRUD, etc...)
    models - will hold all the schemas
    routes - will handle all of our routes for each model
    server.js - will handle all the server logic with express
 */

// server.js does not go in server folder
// package-lock.json
// package.json
// server.js
