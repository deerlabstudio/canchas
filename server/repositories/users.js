const { Levels } = require('../../database/models');

const all = async () => {
  const list = await Levels.findAll();
  return list;
};

module.exports = {
  all,
};
