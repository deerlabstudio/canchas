module.exports = (sequelize, DataTypes) => {
  const Levels = sequelize.define('levels', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  return Levels;
};
