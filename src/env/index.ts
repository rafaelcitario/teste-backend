import z from '../lib/zod';

export const envSchema = z.object( {
  SERVER_HOST: z.string().default( "localhost" ),
  SERVER_PORT: z.string().transform( ( port ) => parseInt( port ) ).default( '4568' ),
  DATABASE_URL: z.string()
} );


const _env = envSchema.safeParse( process.env );
if ( !_env.success ) throw new Error( "Please, check environment variables." );

export const ENV = _env.data;
