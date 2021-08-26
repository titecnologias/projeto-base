const { DataTypes } = require("sequelize");

const sequelize = require("../database/sequelize");

const Car = sequelize.define("car", {
  model: DataTypes.STRING,
  brand: DataTypes.STRING,
  hp: DataTypes.INTEGER,
}, {
  schema: "admin"
});

// new schema is created
sequelize.createSchema('admin').then(() => {});

//create table if not exists...
const init = async () => {
  await Car.sync();
};

init();

module.exports = Car;