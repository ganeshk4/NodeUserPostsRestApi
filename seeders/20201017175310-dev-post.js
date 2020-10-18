'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await queryInterface.rawSelect('user', {
      where: {
        name: 'John doe',
      },
    }, ['id']);
    
    await queryInterface.bulkInsert('post', [{
       content: 'post content 1',
       userId: user,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('post', null, {});
  }
};
