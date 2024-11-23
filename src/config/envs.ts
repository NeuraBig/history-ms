import 'dotenv/config';
import * as joi from 'joi';


interface EnvVars {

  HISTORY_PORT: number;

  NATS_SERVERS: string[];

  HISTORY_APP_VERSION: string;

  HISTORY_STAGE: string;

  HISTORY_DB_HOST: string;

  HISTORY_DB_NAME: string;

  HISTORY_DB_PASSWORD: string;

  HISTORY_DB_PORT: string;

  HISTORY_DB_USERNAME: string;
}

const envsSchema = joi.object( {

  HISTORY_PORT: joi.number().required(),

  NATS_SERVERS: joi.array().items( joi.string() ).required(),

  HISTORY_APP_VERSION: joi.string().required(),

  HISTORY_STAGE: joi.string().required(),

  HISTORY_DB_HOST: joi.string().required(),

  HISTORY_DB_NAME: joi.string().required(),

  HISTORY_DB_PASSWORD: joi.string().required(),

  HISTORY_DB_PORT: joi.string().required(),

  HISTORY_DB_USERNAME: joi.string().required(),

} )
  .unknown( true );

const { error, value } = envsSchema.validate( {
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split( ',' )
} );


if ( error ) {
  throw new Error( `Config validation error: ${ error.message }` );
}

const envVars: EnvVars = value;

export const envs = {

  port: envVars.HISTORY_PORT,

  natsServers: envVars.NATS_SERVERS,

  historyAppVersion: envVars.HISTORY_APP_VERSION,

  stage: envVars.HISTORY_STAGE,

  dbHost: envVars.HISTORY_DB_HOST,

  dbName: envVars.HISTORY_DB_NAME,

  dbPassword: envVars.HISTORY_DB_PASSWORD,

  dbPort: envVars.HISTORY_DB_PORT,

  dbUsername: envVars.HISTORY_DB_USERNAME,

};