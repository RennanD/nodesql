require('dotenv').config()

module.exports = {

    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.NAME,
    password: process.env.PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true
    }

}