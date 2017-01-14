export default (sequelize, DataTypes) => {
  return sequelize.define('Character', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    created: DataTypes.DATE,
    class: {
      type: DataTypes.ENUM,
      values: [
        'Dragonknight',
        'Templar',
        'Nightblade',
        'Sorcerer'
      ]
    },
    race: {
      type: DataTypes.ENUM,
      values: [
        'Altmer',
        'Argonian',
        'Bosmer',
        'Breton',
        'Dunmer',
        'Imperial',
        'Khajiit',
        'Nord',
        'Orc',
        'Redguard'
      ]
    },
    alliance: {
      type: DataTypes.ENUM,
      values: [
        'Aldmeri Dominion',
        'Daggerfall Covenant',
        'Ebonheart Pact'
      ]
    }
  },
  {
    classMethods: {
      associate: (models) => {
        models.Character.belongsTo(models.User, {
          foreignKey: { name: 'userId' }
        });

        models.Character.hasMany(models.Set, {
          foreignKey: { name: 'characterId' }
        });
      }
    }
  });
};
