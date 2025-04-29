import z from '../lib/zod';

export const envSchema = z.object( {
  SERVER_HOST: z.string().default( "localhost" ),
  SERVER_PORT: z.string().transform( ( port ) => parseInt( port ) ).default( '4568' ),
  DATABASE_URI: z.string()
} );


const _env = envSchema.safeParse( process.env );
if ( !_env.success ) throw new Error( "Please, check environment variables.", _env.error );

export const ENV = _env.data;
