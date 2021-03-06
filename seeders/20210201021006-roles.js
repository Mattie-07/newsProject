'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('roles', [{
      name: 'General',
      roleType: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Admin',
      roleType: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  
  
  ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
