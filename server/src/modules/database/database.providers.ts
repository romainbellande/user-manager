import chalk from 'chalk';
import { createConnection } from 'typeorm';

import { AppConfig } from '../../../../common/config';

export const databaseProviders = [
  {
    provide: 'DbPostgresConnectionToken',
    useFactory: async () => {
      console.info(
        chalk.cyan('Connected to database') +
        chalk.green(' [') +
        chalk.blue(`${ AppConfig.POSTGRES_DB }`) +
        chalk.green('] started on port'),
        chalk.green('[') +
        chalk.blue(AppConfig.POSTGRES_PORT.toString()) +
        chalk.green('] ') +
        `http://${ AppConfig.POSTGRES_HOST }:${ AppConfig.POSTGRES_PORT }`,
      );
      return await createConnection({
        type: 'postgres',
        host: AppConfig.POSTGRES_HOST,
        port: AppConfig.POSTGRES_PORT,
        username: AppConfig.POSTGRES_USERNAME,
        password: AppConfig.POSTGRES_PASSWORD,
        database: AppConfig.POSTGRES_DB,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        dropSchema: (process.env.NODE_ENV === 'development'),
      });
    },
  },
];
