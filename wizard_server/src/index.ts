import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './server/config/db';
import mainRoutes from './server/routes/main';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config()

const app: Application = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
// connect to DB
connectDB();

// setup routes
app.use('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`the server is listening on port: ${PORT}`)
})
