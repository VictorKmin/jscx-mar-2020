// const mysql2 = require('mysql2');
//
// let connection = mysql2.createConnection({
//   user: 'user',
//   password: 'user',
//   database: 'auto_shop',
//   host: 'localhost'
// });
//
// module.exports = connection.promise();

const {Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (()=> {
  let instance;

  function initConnection() {
    const client = new Sequelize('auto_shop', 'user', 'user', {
      host: 'localhost',
      dialect: 'mysql'
    });

    let models = {};

    function getModels() {
      fs.readdir(path.join(process.cwd(), 'dataBase', 'models'), (err, files)=> {
        files.forEach(file => {
          const [modelName] = file.split('.')
          models[modelName] = (require(path.join(process.cwd(), 'dataBase', 'models', modelName)))(client, DataTypes)
        })
      })
    }

    return {
      setModels: () => getModels(),
      getModel: (modelName) => models[modelName]
    }
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = initConnection()
      }

      return instance;
    }
  }
})()



