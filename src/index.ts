import * as dotenv from 'dotenv';
dotenv.config();
import database from './infrastructure/database/database';
import { server } from './infrastructure/server/server';

database.connect(process.env.URI);
server();
