import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import rateLimit from 'express-rate-limit';
import { adRouter } from './routers/ad.router';
import { handleError, ValidationError } from './utils/errors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(json());
app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
  })
);

app.use('/ad', adRouter);
app.use(handleError);

app.listen(3001, 'localhost', () => {
  console.log('Listening on http://localhost:3001');
});
