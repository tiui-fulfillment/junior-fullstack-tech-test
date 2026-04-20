import express from 'express';
import cors from 'cors';
import ordersRouter from './routes/ordersRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
// CORS_ORIGIN debe definirse en producción con la URL exacta del frontend.
// Para desarrollo local puedes usar: CORS_ORIGIN=http://localhost:5173
const CORS_ORIGIN = process.env.CORS_ORIGIN || false;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use('/api/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
