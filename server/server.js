import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoDb from './config/mongoDb.js';
import userRoutes from './routes/userRoute.js'
import authRoutes from './routes/authRoute.js'
import cookieParser from 'cookie-parser'; // Import cookie-parser
import announcementRoutes from './routes/announcementRoute.js';
import subjectRoutes from './routes/subjectRoute.js';
import quizRoutes from './routes/quizRoute.js';

const app = express();

dotenv.config();
mongoDb();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser()); // Use cookie-parser middleware

const PORT = process.env.PORT || 1000

app.get('/', (req,res) => {
  res.send("server running on port 5000")
})



app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/announcement', announcementRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/quizzes', quizRoutes);



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