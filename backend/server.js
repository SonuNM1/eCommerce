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

const app = express();

dotenv.config();

connectDB(); // database connection

// Middleware

const allowedOrigins = ['https://shoplyn.netlify.app'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
}));

// Handle preflight requests

app.options('*', cors());


app.use(express.json());
app.use(morgan('dev'));

// Routes

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/auth', userRoute);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} mode on: http://localhost:${PORT}`.bgCyan.white);
});
