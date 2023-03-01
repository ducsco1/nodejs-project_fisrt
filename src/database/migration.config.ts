import { DataSource, DataSourceOptions } from "typeorm";

var typeOrmConfig: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: 3307,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'nojimakeiko',
    synchronize: false,
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}'],
    entities: [__dirname + '/../**/entity/*.{ts,js}'],
};
const datasource = new DataSource(typeOrmConfig);
datasource.initialize();
export default datasource; 