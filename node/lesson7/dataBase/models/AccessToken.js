module.exports = (sequelize, DataTypes) => {
  const AccessToken = sequelize.define('AccessToken', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

  }, {
    tableName: 'tokens',
    timestamps: false
  })

  return AccessToken;
}
