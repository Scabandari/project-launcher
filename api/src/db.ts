const Sequelize = require('sequelize');

const dbName = process.env.DB_NAME || 'db_dev';
const dbPort = process.env.DB_PORT || 5432;
const dbHost = process.env.DB_HOST || 'localhost';
const urlConnectionString = process.env.DATABASE_URL;

const connectionString = urlConnectionString
  ? urlConnectionString
  : `postgres://postgres:postgres@${dbHost}:${dbPort}/${dbName}`;
const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  underscored: true,
  underscoredAll: true,
  logging: (msg: { level: string; message: any }) => {
    if (msg.level === 'error') {
      console.error(msg.message);
    }
  },
  query: { raw: true },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
