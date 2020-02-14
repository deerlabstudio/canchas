module.exports = (sequelize, DataTypes) => {
  const Levels = sequelize.define('Levels', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    tableName: 'levels',
  });

  Levels.associate = (models) => {};

  return Levels;
};
