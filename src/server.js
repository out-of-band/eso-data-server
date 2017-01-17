const Hapi = require('hapi');
const Sequelize = require('sequelize');
const nconf = require('nconf');

nconf.env().file('./config/server.json');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

const sql = new Sequelize(process.env.DATABASE_URL, opts);

export default () => {
  await server.register({
    register: require('hapi-sequelize'),
    options: [{
      name: ['./src/models/**/*.js'],
      sequelize: sql,
      sync: true
    }]
  });

  const db = server.plugins['hapi-sequelize-crud'].db;
  const models = db.sequelize.models;

  await server.start((err) => {
    if (err) {
      throw err;
    }
  });
}
