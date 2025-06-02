import express from 'express'; // after installation of a module and express we can use express through importing
const app = express(); // saving express method to make the reading and writing easy
app.get("/students", (req, res) => {
    res.send(`Student Profile for ID: ${req.params.id}`); // this is property to get parameters of http query - id
})
app.listen(8000, ()=>console.log(`Server started on port 8000`)); //listen is for running the server on browser or postman
/*
comments aren't written by chatGPT
* */