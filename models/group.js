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
        // Define many-to-many relationship between Groups and Users
        // Define many-to-many relationship between 
      }
    }
  });
};
