import express from 'express';
import router from './routes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

export function server() {
  app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto ' + 3000);
  });
}
