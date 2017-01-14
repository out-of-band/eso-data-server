const Hapi = require('hapi');
const Sequelize = require('sequelize');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

const sql = new Sequelize(db, opts);

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

server.start((err) => {
  if (err) {
    throw err;
  }
});