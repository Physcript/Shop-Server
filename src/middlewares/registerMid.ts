
import { Request,Response,NextFunction } from 'express'
import validator from 'validator'
import bcrypt from 'bcrypt'
import User from '../models/User'

const registerMid = async (req:Request,res:Response,next:NextFunction) => {
    const { firstName,lastName,email,password,confirmPassword } = req.body

    if(await CHK_VALID_EMAIL(email)) {
        res.status(400).json({ error: { email: 'Invalid Email' } })
        return
    }
    if(await CHK_EXIST_EMAIL(email)) {
        res.status(400).json({ error: { email: 'Email Already Exist'} })
        return
    }
    if(await CHK_VALID_PASSWORD(password)) {
        res.status(400).json({ error: { password: 'Invalid Password Creation' } })
        return
    }

    if(await CHK_PASSWORD_LENGTH(password)) {
        res.status(400).json({error: { password:  'Password Minimum of 6 Characters'} })
        return
    }

    if(await CHK_PASSWORD_MATCH(password,confirmPassword)) {
        res.status(400).json({ error: { password: 'Password Not Match'} })
        return
    }

    if(await CHK_VALID_FN(firstName)) {
        res.status(400).json({ error: { firstName: 'Firstname Required'} })
        return
    }

    if(await CHK_VALID_LN(lastName)) {
        res.status(400).json({ error: { lastName: 'Lastname Required'} })
        return
    }

    await FINALIZE_REGISTER( firstName,lastName,email,password  )
    next()

}
const CHK_VALID_FN = async (firstName:string) => {
    if( firstName.trim() === '' ) {
        return true
    }
    return false
}
const CHK_VALID_LN = async (lastName:string) => {
    if( lastName.trim() === '' ) {
        return true
    }
    return false
}

const CHK_VALID_EMAIL = async (email:string) => {
    if( !validator.isEmail(email) ) {
       return true
    }
    return false
}
const CHK_EXIST_EMAIL = async (email:string) => {
    const user = await User.findOne({ email })
    if(user) {
        return true
    }
    return false
}

const CHK_VALID_PASSWORD = async (password: string) => {
    if(password.includes(' ')) {
        return true
    }
    return false
}
const CHK_PASSWORD_LENGTH = async (password: string) => {
    const passwords = password.trim()
    if(passwords.length <= 5) {
        return true
    }
    return false
}

const CHK_PASSWORD_MATCH = async (password: string, confirmPassword: string) => {
    if(password !== confirmPassword) {
        return true
    }
    return false
}

const FINALIZE_REGISTER = async (firstName: string, lastName: string, email: string, password: string) => {
    const encrypt = await bcrypt.hash(password,8)

    const user = new User({
        firstName,
        lastName,
        password: encrypt,
        email,
    })
    await user.save()
    return
}

export default registerMid