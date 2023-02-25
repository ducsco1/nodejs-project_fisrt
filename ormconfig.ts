module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '123456',
  database: 'nojimakeiko',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
