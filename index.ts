import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import { handleError, ValidationError } from './utils/errors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(json());

// Routes
app.get('/', async (req, res) => {
  throw new ValidationError('Test');
});
app.use(handleError);

app.listen(3001, 'localhost', () => {
  console.log('Listening on http://localhost:3001');
});
