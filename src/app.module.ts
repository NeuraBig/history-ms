import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from './common/common.module';
import { envs } from './config';



@Module( {
  
  imports: [
    ConfigModule.forRoot( {
      isGlobal: true,
    } ),

    TypeOrmModule.forRoot( {
      ssl: envs.stage === 'prod',
      extra: {
        ssl: envs.stage === 'prod'
          ? { rejectUnauthorized: false }
          : null,
      },
      type: 'postgres',
      host: envs.dbHost,
      port: +envs.dbPort,
      database: envs.dbName,
      username: envs.dbUsername,
      password: envs.dbPassword,
      autoLoadEntities: true,
      synchronize: true,
    } ),

    ServeStaticModule.forRoot( {
      rootPath: join( __dirname, '..', 'public' ),
    } ),

    CommonModule,

  ]
} )
export class AppModule { }
