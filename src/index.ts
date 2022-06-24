import express, { Express, Request, Response, NextFunction } from 'express';
import { createServer, Server } from 'http';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const port = process.env.PORT || 5500;
const app: Express = express();
const server: Server = createServer(app);

app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new Error('Not found'));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(err.message === 'Not found' ? 404 : 500).json({
    success: false,
    message: err.message || 'Internal error',
  });
});

server.listen(app.get('port'));

server.on('listening', () => {
  console.log(`[server] listening on port ${app.get('port')}`);
});
