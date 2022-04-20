
// information needed for db connection. 

require('dotenv').config();
const Pool = require("pg").Pool;

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.database
});


module.exports = pool;
