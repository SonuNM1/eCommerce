import express from "express" ;
import colors from "colors" ; 
import dotenv from "dotenv" ; 
import morgan from "morgan" ; 
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors' ; 
import categoryRoutes from './routes/categoryRoutes.js' ; 

const app = express() ; 

dotenv.config() ; 

connectDB() ; // database connection 

// Middleware 

app.use(cors()) ; 
app.use(express.json()) ; 
app.use(morgan('dev')) ; 

// Routes 

app.use('/api/v1/auth', authRoutes) ; 
app.use('/api/v1/category', categoryRoutes) ; 

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to eCommerce</h1>")
})

const PORT = process.env.PORT || 8080 ; 

app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.DEV_MODE} mode on: http://localhost:${PORT}`.bgCyan.white);  
})