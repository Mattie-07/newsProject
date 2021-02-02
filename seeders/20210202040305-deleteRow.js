'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

      await queryInterface.addConstraint('users', [{
        fields:['userName'],
        type: 'unique',
        name:'uniqueName'
      }], {});
    
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
