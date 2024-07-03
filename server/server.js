import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoDb from './config/mongoDb.js';
import userRoutes from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'
const app = express();

dotenv.config();
mongoDb();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 1000

app.get('/', (req,res) => {
  res.send("server running on port 5000")
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoute)

app.listen(PORT, console.log(`server running on port ${PORT}`));

/**add middleware and a function to handle errors */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})