import express from "express"
import jwt from "jsonwebtoken"
import { ContentModel, LinkModel, UserModel } from "./db";
import { config } from "./config";
import { userMiddleware } from "./middleware";
import { random } from "./utils";

const app = express();
const port = config.port;

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
        }, config.jwtSecret)
        res.json({
            token
        }) 
    }else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

app.post("/api/v1/content",userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    
    await ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content Added"
    })
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId")
    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })

})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
        const share = req.body.share;
        if(share) {
            await LinkModel.create({
                //@ts-ignore
                userId: req.userId,
                hash: random(10)
            })
        }else{
            await LinkModel.deleteOne({
                //@ts-ignore
                userId: req.userId
            })
        }
        res.json({
            message:"Updated Sharable Link"
        })
})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(port , () => {
    console.log(`Listening on Port : ${port}`);
})