const orm = require('../config/orm.js');
const router = express.Router();
//create the code that will call the ORM functions using burger specific input for the ORM.
//this model talks to the database and gives back data to the controllor

//build out an object to talk to ORM , with functions and trigger select all and so on.