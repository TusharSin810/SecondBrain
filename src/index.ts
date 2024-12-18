import express from "express"
import jwt from "jsonwebtoken"

const app = express();
const port = 3000;

app.post("/api/v1/signup", (req, res) => {

})

app.post("/api/v1/signin", (req, res) => {
    
})

app.listen(port , () => {
    console.log(`Listening on Port : ${port}`);
})