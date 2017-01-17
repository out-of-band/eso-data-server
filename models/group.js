export default (sequelize, DataTypes) => {
  return sequelize.define('Group', {
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
        // Define many-to-many relationship between Groups and Characters
        // Define one-to-many relationships between Groups and Raids
        Group.hasMany('Raid');
      }
    }
  });
};
