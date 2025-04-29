import { app } from './app/app';
import { ENV } from './env';

const port = ENV.SERVER_PORT;
app.listen( port, () => {
  console.log( `Escutando na porta ${port}` );
} );
