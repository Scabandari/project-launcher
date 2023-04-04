const Sequelize = require('sequelize');

const dbName = process.env.DB_NAME || 'db_dev';
const dbPort = process.env.DB_PORT || 5432;
const dbHost = process.env.DB_HOST || 'localhost';
const sequelize = new Sequelize(
  `postgres://postgres:postgres@${dbHost}:${dbPort}/${dbName}`,
  {
    underscored: true,
    underscoredAll: true,
    logging: (msg: { level: string; message: any }) => {
      if (msg.level === 'error') {
        console.error(msg.message);
      }
    },
    query: { raw: true },
  }
);
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
