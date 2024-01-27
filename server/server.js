import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { db } from './database/database';
import userRouter from './routes/userRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/user', userRouter);

app.get("/", (req, res) => {
  return res.json({ message: "awesome.social" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
