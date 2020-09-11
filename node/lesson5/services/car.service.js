const {Op} = require('sequelize')
const connection = require('../dataBase').getInstance();

module.exports = {
  // findAll: async () => {
  //   const [cars] = await connection.query('SELECT * FROM cars');
  //   return cars;
  // }

  findAll: async () => {
    const Car = connection.getModel('Car');
    return Car.findAll({});
  },

  getWithFilter: async () => {
    const Car = connection.getModel('Car');
    return Car.findAll({
      where: {
        price: {
          [Op.gt]: 2000
        }
      }
    });
  },

  createCar: async (carObject) => {
    const Car = connection.getModel('Car');
    return Car.create(carObject, {new: true});
  }
}
