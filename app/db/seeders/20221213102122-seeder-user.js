'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const { v4: uuidv4 } = require('uuid');

    // Password
    const password = bcrypt.hashSync('rahasia', 10);

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: uuidv4(),
          msisdn: 88826573212,
          name: 'Rian Muhammad',
          username: 'rianmfir',
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          msisdn: 89736328341,
          name: 'Jhon Doe',
          username: 'jhond',
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          msisdn: 89634633499,
          name: "Bams",
          username: "bams",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Logistics', null, {});

  }
};
