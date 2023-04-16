import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import crudRoutes from './routes/Crud.js';
import cors from 'cors';

const port = process.env.PORT || 5003;
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', crudRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
.then(console.log("MongoDB Connected!"))
.catch((err)=> {console.log(err);});

app.listen(port, () => {
    console.log('listening on port ' + port);
})