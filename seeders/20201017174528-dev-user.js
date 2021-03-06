'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('user', [{
       name: 'John Doe',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'comment user 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'comment user 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  }
};
