import express, { Request, Response } from "express";
import { router } from '../http/routes';

export const app = express();

app.use( express.json() );
app.use( '/api', router );
