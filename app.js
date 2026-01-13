import express from "express";
import {PORT} from './config/env.js';

const app = express();

app.get('/', (req,res)=> {
    res.send("Server Is Running")
})

app.listen(PORT, () =>{
    console.log('server is running on port 5500');
})

