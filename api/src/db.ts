const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@db:5432/db_dev', {
  underscored: true,
  underscoredAll: true,
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
