const { all } = require('../repositories/users');

const list = (request, h) => {
  return h.response(all()).code(200);
};

module.exports = {
  list,
};
