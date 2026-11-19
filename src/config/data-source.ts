import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../entities/User.ts'
import { Config } from './index.ts'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: Config.DB_HOST ?? 'localhost',
    port: Config.DB_PORT ? Number(Config.DB_PORT) : 5432,
    username: Config.DB_USERNAME ?? 'postgres',
    password: Config.DB_PASSWORD ?? '',
    database: Config.DB_NAME ?? 'postgres',
    // don't forget to set the synchronize option to false in production
    synchronize:
        Config.NODE_ENV === 'test' || Config.NODE_ENV === 'dev' ? true : false,
    // to log all the queries run by TypeORM, set the logging option to true
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
