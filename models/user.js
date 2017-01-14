export default (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    created: DataTypes.DATE
  },
  {
    classMethods: {
      associate: (models) => {
        models.User.hasMany(models.Character, {
          foreignKey: { name: 'userId' }
        });
      }
    }
  });
};
