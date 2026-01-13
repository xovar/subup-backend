import express from "express";
import {PORT} from './config/env.js';
import connectToDataBase from "./database/mongodb.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import sbusriptionRouter from "./routes/subscription.routes.js";

const app = express();

app.get('/', (req,res)=> {
    res.send("Server Is Running")
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', sbusriptionRouter);

app.listen(PORT, () =>{
    console.log('server is running on port 5500');
    connectToDataBase();
})

