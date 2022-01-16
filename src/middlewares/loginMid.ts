
import { Request,Response,NextFunction } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import config from '../config'
import jwt from 'jsonwebtoken'
import { IUser } from '../interfaces/user'

const LoginMid = async (req: Request, res: Response, next: NextFunction) => {
    const { email,password } = req.body

    const user: IUser | null = await CHK_EMAIL(email)

    if(await CHK_PASSWORD(password,user?.password!)) {
        await GENERATE_TOKEN(user!,res)
        await SAVING_TOKEN(email,res.locals.token)
        next()

    }else {
        res.status(400).json({ error: 'Invalid Email/Password'  })
        return
    }
}

const CHK_EMAIL = async (email: string) => {
    const user = await User.findOne({ email })
    if(user){
        return user
    }
    return null
}

const CHK_PASSWORD = async (password: string, userPassword: string ) => {
    if( userPassword ) {
        return await bcrypt.compare(password,userPassword)
    }else {
        return
    }
}
const GENERATE_TOKEN = async (user: IUser, res: Response) => {

    const data = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }

    const token = await jwt.sign(data,`${config.TOKEN.LOGIN}`)

    res.locals.user = data
    res.locals.token = token

    return

}

const SAVING_TOKEN = async (email:string, token: string) => {
    const user = await User.findOne({email})
    user!.loginToken = token
    await user!.save()
    return
}
export default LoginMid