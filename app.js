import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import waitlistRouter from './routers/waitlistRouter.js';

dotenv.config();

const app = express();

app.use(express.json());

// CORS
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

const BASE_URL = process.env.BASE_URL || '/api';

app.use(`${BASE_URL}/waitlist`, waitlistRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // Database connection
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Database connected');
  }).catch((error) => {
    console.log('Error connecting to database: ', error);
  });
});
