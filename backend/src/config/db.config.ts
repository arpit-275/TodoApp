import { Sequelize } from 'sequelize';
import env from '../utils/validateEnv';

const db = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

export default db;
