// Raid relationships:
// * Belongs to a Group
// * Has many Characters
// * Has a strategy
// * Has required roles
// * Has required sets/buffs
// * Has a date (or a recurrence of dates/days)
// * Has many maps (should this belong in Raid or Strategy?)

export default (sequelize, DataTypes) => {
  return sequelize.define('Raid', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    schedule: DataTypes.STRING,
    created: DataTypes.DATE,
    isPrivate: DataTypes.BOOLEAN,
    location: {
      type: DataTypes.ENUM,
      values: [
        'Aetherian Archive',
        'Hel Ra Citadel',
        'Maw of Lorkhaj',
        'Sanctum Ophidia'
      ]
    }
  },
  {
    classMethods: {
      associate: (models) => {
        models.Raid.belongsToMany(models.Character, {
          as: 'Characters',
          through: 'RaidCharacters'
        });

        models.Raid.belongsToMany(models.User, {
          as: 'Users',
          through: 'RaidUsers'
        });
      }
    }
  });
};
