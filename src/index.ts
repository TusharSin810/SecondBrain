import express from "express"
import jwt from "jsonwebtoken"
import { UserModel } from "./db";

const app = express();
const port = 3000;
const JWT_PASSWORD = "Tushar810";


app.post("/api/v1/signup", async (req, res) => {
    //ZOD Validation
    const username = req.body.username;
    const password = req.body.password;
    try{
        await UserModel.create({
            username: username,
            password: password
        })

        res.json({
            message: "User Singed Up"
        })
    }catch(e){
        res.status(411).json({
            message: "User Already Exist"
        })
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userexist = await UserModel.findOne({
        username: username,
        password: password
    })  

    if(userexist){
        const token = jwt.sign({
            id: userexist._id
        }, JWT_PASSWORD)
        res.json({
            token
        }) 
    }else{
        res.status(403).json({
            message: "Iccorect Credentials"
        })
    }
})

app.post("/api/v1/content", (req, res) => {
    
})

app.get("/api/v1/content", (req, res) => {
    
})


app.listen(port , () => {
    console.log(`Listening on Port : ${port}`);
})