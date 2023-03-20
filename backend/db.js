//db connection
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const mysqli = require('mysql2');

const connection = mysqli.createConnection({
    host:process.env.hostname,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
})

module.exports = connection;