'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [{
            login: 'John Doe',
            password: 'test'
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
         await queryInterface.bulkDelete('Users', null, {});
    }
};
