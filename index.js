//import * as http from "node:http";
// const server = http.createServer((req, res)=>{
//     if (req.url === '/health-check'){
//         res.end('<h1>Server is healthy</h1>')
//     }else {
//         res.end('<h1>Server is working</h1>')
//     }
// })
//
// server.listen(3000);

import express from 'express';
const app = express();
app.get("/home/:id",(req, res) => {
    if(req.params.id==='health-check'){
        res.send("Server is healthy")
    }
    else{
        res.send("Server is running")
    }
})
app.listen(3000);

