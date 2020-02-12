const usersRepository = require('../repositories/users');

const list = async (request, h) => {
  try {
    const all = await usersRepository.all();
    return h.response(all).code(200);
  } catch (error) {
    console.log(error);
    return h.response('asf').code(500);
  }
};

module.exports = {
  list,
};
