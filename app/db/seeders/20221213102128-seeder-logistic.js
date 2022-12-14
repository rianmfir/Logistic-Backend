'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'Logistics',
      [
        {
          logistic_name: "JNE",
          amount: 10000,
          destination_name: "JAKARTA",
          origin_name: "BANDUNG",
          duration: "2-4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logistic_name: "Si Cepat",
          amount: 9000,
          destination_name: "JAKARTA",
          origin_name: "BANDUNG",
          duration: "2-5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logistic_name: "Si Cepat",
          amount: 11000,
          destination_name: "BANDUNG",
          origin_name: "SUKABUMI",
          duration: "2-5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logistic_name: "JNE",
          amount: 10000,
          destination_name: "BEKASI",
          origin_name: "BANDUNG",
          duration: "2-5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logistic_name: "J&T",
          amount: 10000,
          destination_name: "BANDUNG",
          origin_name: "BEKASI",
          duration: "2-5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          logistic_name: "J&T",
          amount: 9000,
          destination_name: "JAKARTA",
          origin_name: "BEKASI",
          duration: "2-5",
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
