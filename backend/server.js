import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your existing imports
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

// Create express app
const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './client/build')));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/auth', userRoute);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// Serve the React app for any other route
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Set the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on: http://localhost:${PORT}`.bgCyan.white);
});
