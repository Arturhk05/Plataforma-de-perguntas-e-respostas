const Sequelize = require("sequelize")

const connection = new Sequelize('guiaperguntas', 'root', 'artur123', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection