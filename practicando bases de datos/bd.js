require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const PlayerModel = require('./models/players')

const sequelize = new Sequelize(
`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/jugadores`,
   { logging: false, native: false }
);


PlayerModel(sequelize);
const { Player } = sequelize.models;

module.exports = {
    Player,
   conn: sequelize,
};