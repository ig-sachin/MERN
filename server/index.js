import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// routes import
import postRoutes from './routes/posts.js'; // imp
import userRoutes from './routes/users.js'; // imp


const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes); // imp
app.use('/users', userRoutes); // imp /users/register

mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
    .catch((e) => console.log(e.message));