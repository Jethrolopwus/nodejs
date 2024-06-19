// modules
// Common js,  every file is a module (by default)

// modules, encapsulate code (only share minimum)

const names = require ("./4-names.js")
const sayHi = require ("./5-utils.js")
const data = require("./6-alternative-syntax")

require("./7-mindGrenade")

sayHi("Jethro");
sayHi(names.John);
sayHi(names.Peter);