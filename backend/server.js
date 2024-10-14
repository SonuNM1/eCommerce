import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import userRoute from './routes/userRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

dotenv.config();

connectDB(); // database connection

// Middleware

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true 
}));

app.use(express.json());
app.use(morgan('dev'));

// Get the __dirname equivalent for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../../client/build')));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/auth', userRoute);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// Catch-all to serve the frontend app

app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on: http://localhost:${PORT}`.bgCyan.white);
});
