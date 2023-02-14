// const mysql = require('mysql2');


// const pool = mysql.createPool({
    
//     host : 'localhost',
//     user : 'root',
//     database : 'nodejs',
//     password : 'H3lloworld!'
// })

// // module.exports = pool.promise()

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs','root', 'H3lloworld!', {
    dialect : 'mysql',
    host : 'localhost'
});


module.exports = sequelize;