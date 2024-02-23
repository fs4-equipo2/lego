import express from 'express';
import paymentRoutes from './routes/payment.routes.js';
import cors from 'cors';
import { PORT } from './config.js'

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use(paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
  });
