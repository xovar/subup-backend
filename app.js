import express, { urlencoded } from "express";
import {PORT} from './config/env.js';
import connectToDataBase from "./database/mongodb.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import sbusriptionRouter from "./routes/subscription.routes.js";
import errorMiddleware from "./middlewares/error.middlewares.js";
import cookieParser from "cookie-parser";

const app = express();

app.get('/', (req,res)=> {
    res.send("Server Is Running")
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser)

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', sbusriptionRouter);

app.use(errorMiddleware);

app.listen(PORT, () =>{
    console.log('server is running on port 5500');
    connectToDataBase();
})

