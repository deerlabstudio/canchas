module.exports = {
  up(queryInterface, Datatypes) {
    return queryInterface.createTable('levels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Datatypes.STRING(50),
      },
      description: {
        allowNull: false,
        type: Datatypes.STRING(255),
      },
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('levels');
  },
};
