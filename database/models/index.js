/* eslint-disable dot-notation */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/config');

const basename = path.basename(__filename);
const db = {};

const { database, username, password } = config.get('database');

const sequelize = new Sequelize(database, username, password, config.get('database'));

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
