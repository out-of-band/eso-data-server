export default (sequelize, DataTypes) => {
  return sequelize.define('Set', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    created: DataTypes.DATE,
    details: DataTypes.JSON
  },
  {
    classMethods: {
      associate: (models) => {
        models.Set.belongsTo(models.Character, {
          foreignKey: { name: 'characterId' }
        });
      }
    }
  });
};
