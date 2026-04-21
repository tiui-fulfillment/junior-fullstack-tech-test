import express from 'express';
import cors from 'cors';
import path from 'path';
import ordersRouter from './routes/orders';

const app = express();
// Cloud Run injects PORT=8080; fallback to 8080 locally when using the root Dockerfile
const PORT = process.env.PORT || 8080;
// CORS_ORIGIN only needed for local dev (frontend on :5173, backend on :8080).
// In production both are served from the same origin so CORS is not required.
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// API routes
app.use('/api/orders', ordersRouter);

// Serve compiled frontend assets (copied into ./public by the root Dockerfile)
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// SPA fallback — return index.html for any route not matched above
app.get('*', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
