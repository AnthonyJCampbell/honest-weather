// const db = require('../database/dbConfig.js');
// const db = {}

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return new Promise(function(resolve, reject) {
    resolve({
      "message": "This is a dummy response",
    "id": "117",
    "username": "John"
    })
  })

  // return db('users').select('id', 'username');
}

function findBy(filter) {
  return new Promise(function(resolve, reject) {
    resolve({
      "message": "This has been filtered with the id of 058",
      "id": "058",
      "username": "Linda",
      "password": "$2a$12$NyQwYmkKlhROCceB6L54AumJ7DrxGWNnCR.AUFu0Xa0udSNpf4BI"
    })
  })
  // return db('users')
  //   .select('id', 'username')
  //   .where(filter);
}

function add(user) {
  return new Promise(function(resolve, reject) {
    resolve({
      "message": "A new user has been added",
      "id": "144",
      "username": "Leonid",
      "password": "$2a$12$NyQwYmkKlhROCceB6L54AumJ7DrxGWNnCR.AUFu0Xa0udSNpf4BI"
    });
  });
   
  // return db('users')
  //   .insert(user, 'id')
  //   .then(ids => {
  //     const [id] = ids;
  //     return findById(id);
  //   });
}

function findById(id) {
  return new Promise(function(resolve, reject) {
    resolve({
      "message": "This has been filtered with the id of 058",
    "id": "058",
    "username": "Linda",
    "password": "$2a$12$NyQwYmkKlhROCceB6L54AumJ7DrxGWNnCR.AUFu0Xa0udSNpf4BI"
    });
  });
   

  // return db('users')
  //   .select('id', 'username')
  //   .where({ id })
  //   .first();
}
