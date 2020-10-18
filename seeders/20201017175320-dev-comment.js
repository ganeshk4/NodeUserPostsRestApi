'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const user = await queryInterface.rawSelect('user', {
      where: {
        name: 'comment user',
      },
    }, ['id']);

    const post = await queryInterface.rawSelect('post', {
      where: {
        content: 'post content 1',
      },
    }, ['id']);

    await queryInterface.bulkInsert('comment', [{
      content: 'comment content',
      userId: user,
      postId: post,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comment', null, {});
  }
};
