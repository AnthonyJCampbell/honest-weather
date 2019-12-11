// const db = require('../database/dbConfig.js');
// const db = {}

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return {
    "message": "This is a dummy response",
    "id": "117",
    "username": "John"
  }
  return db('users').select('id', 'username');
}

function findBy(filter) {
  return {
    "message": "This has been filtered with the id of 058",
    "id": "058",
    "username": "Linda"
  }
  return db('users')
    .select('id', 'username')
    .where(filter);
}

function add(user) {
  return {
    "message": "A new user has been added",
    "id": "144",
    "username": "Leonid"
  }
  // return db('users')
  //   .insert(user, 'id')
  //   .then(ids => {
  //     const [id] = ids;
  //     return findById(id);
  //   });
}

function findById(id) {
  return {
    "message": "This has been filtered with the id of 058",
    "id": "058",
    "username": "Linda"
  }
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}
