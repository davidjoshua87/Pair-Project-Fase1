'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Books', [{
      title: "Holy Bible NIV Uk. Small (New International Version)",
      stock: 5,
      price: 260000,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      title: "The Allah Way by Munawar",
      stock: 7,
      price: 149000,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      title: "Terjemah Riyadhush Shalihin - Takhrij Syaikh Albani",
      stock: 3,
      price: 140000,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      title: "Alkitab Wedding Katolik Uk. Besar",
      stock: 5,
      price: 175000,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      title: "TUTORIAL - SI TUKANG TIDUR VOL 2 - MAIN YOUTUBE",
      stock: 9,
      price: 29000,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
