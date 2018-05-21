'use strict';
var bcrypt = require('bcrypt');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'mfm',
      password:  bcrypt.hashSync('rahasia', 10),
      name: 'Fari',
      gender: 'Pria',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
