'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const user1 = await queryInterface.rawSelect('user', {
      where: {
        name: 'comment user 1',
      },
    }, ['id']);

    const user2 = await queryInterface.rawSelect('user', {
      where: {
        name: 'comment user 2',
      },
    }, ['id']);

    const post = await queryInterface.rawSelect('post', {
      where: {
        content: 'post content 1',
      },
    }, ['id']);

    await queryInterface.bulkInsert('comment', [{
      content: 'comment content 1',
      userId: user1,
      postId: post,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      content: 'comment content 2',
      userId: user2,
      postId: post,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: 'comment content 3',
      userId: user2,
      postId: post,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comment', null, {});
  }
};
