import {NextFunction, Response, Request} from "express";
import jwt, {JwtPayload, VerifyErrors} from 'jsonwebtoken'
import config from '../config'
import {IUser} from "../interfaces/user";

const authMid = async (req: Request,res: Response,next:NextFunction) => {  

    const token = req.headers.token
    
    jwt.verify(`${token}`,`${config.TOKEN.LOGIN}`, (err,decode) => {
        if(err) {
            res.locals.user = false
        }else {
            res.locals.user = decode
        }
    })
    next()

}
export const chk_token = async (token: string, res: Response) => {
    jwt.verify(token,`${config.TOKEN.LOGIN}`, (err,decode) => {
        if(err) {
            res.locals.user = false
        }else {
            res.locals.user = decode
        }
    })
}

export default authMid