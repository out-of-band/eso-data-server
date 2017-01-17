import { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';

/**
 * @param {Sequelize} sql
 * @param {DataTypes} dt
 */
export default function(sql, dt) {
  return sql.define('User', {
    id: {
      type: dt.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    created: DataTypes.DATE
  },
  {
    classMethods: {
      /**
       * @param 
       */
      associate: (models) => {
        models.User.hasMany(models.Character, {
          foreignKey: { name: 'userId' }
        });
      }
    }
  });
};
