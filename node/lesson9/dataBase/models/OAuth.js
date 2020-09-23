const path = require('path');

const { OAUTH } = require('../../configs/db-tables.enum');

module.exports = (sequelize, DataTypes) => {
  const OAuth = sequelize.define('OAuth', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    access_token: {
      type: DataTypes.STRING
    },
    refresh_token: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    created_at: {
      type: DataTypes.STRING,
      default: new Date().toISOString()
    }

  }, {
    tableName: OAUTH,
    timestamps: false
  });

  const User = (require(path.join(process.cwd(), 'dataBase', 'models', 'User')))(sequelize, DataTypes)
  OAuth.belongsTo(User, { foreignKey: 'user_id' });

  return OAuth;
}
