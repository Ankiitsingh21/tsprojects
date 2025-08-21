import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
// import postRoutes from './routes/postRoutes';
import prisma from './db';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
//   console.log(`Health check: http://localhost:${PORT}/health`);
});