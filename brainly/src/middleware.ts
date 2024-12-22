import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";
import { config } from "./config";


export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, config.jwtSecret)
    if(decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}