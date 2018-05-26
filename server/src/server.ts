import { NestFactory } from '@nestjs/core';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import chalk from 'chalk';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// tslint:disable-next-line:no-var-requires
const history = require('connect-history-api-fallback');

import { AppConfig } from '../../common/config';
import { ApplicationModule } from './modules/app.module';

import { LoggingInterceptor } from './interceptors';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
  }
  app.use(bodyParser.json());
  app.setGlobalPrefix(AppConfig.API_URL);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  const options = new DocumentBuilder()
    .setTitle(AppConfig.APP_NAME)
    .setVersion(`v${ AppConfig.API_VERSION }`)
    .setBasePath(AppConfig.API_URL)
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/doc', app, document);

  if (process.env.NODE_ENV === 'production') {
    app.use((req: express.Request, res, next) => {
      if (req.url.indexOf(AppConfig.API_URL) !== 0) {
        res.sendFile(path.join(__dirname, 'public/app.html'));
      } else {
        next();
      }
    });
  }

  await app.listen(AppConfig.PORT)
    .then(() => {
      console.info(
        chalk.cyan('App') +
        chalk.green(' [') +
        chalk.blue(`${ AppConfig.APP_NAME }`) +
        chalk.green('] started on port'),
        chalk.green('[') +
        chalk.blue(AppConfig.PORT.toString()) +
        chalk.green('] ') +
        `http://${ AppConfig.HOST }:${ AppConfig.PORT }`,
      );
    })
    .catch(console.error);
}
bootstrap();
