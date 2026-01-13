import express from "express";

const app = express();

app.get('/', (req,res)=> {
    res.send("Server Is Running")
})

app.listen(5500, () =>{
    console.log('server is running on port 5500');
})

