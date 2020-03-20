module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'rem',
  username: 'postgres',
  password: 'postgres',
  synchronize: true,
  logging: true,
  entities: ['src/entity/**.ts'],
  subscribers: [],
  migrations: ['migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
};
