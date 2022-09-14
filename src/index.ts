import express, { Express, Request, Response } from 'express';
import logger from './config/logger';
import validationResult from './config/validate'

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(validationResult.value.PORT, () => {
  logger.info(`⚡️[server]: running at https://localhost:${validationResult.value.PORT}`);
});