const Sequelize = require('sequelize')
const db_config = require('../config/database')

const connection = new Sequelize(db_config)

module.exports = connection