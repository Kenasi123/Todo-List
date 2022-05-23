const Pool = require("pg").Pool 

const pool = new Pool({
    user: "corcoding",
    host:"localhost",
    PORT:"3000",
    database:"perntodo"
}); 

module.exports = pool;