

import mongoose , { Schema } from 'mongoose'
import { IUser } from '../interfaces/user'

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        lowercase: true
    },
    password: String,
    loginToken: String,
    verified: {
        type: String,
        default: false
    },
    verifiedToken: String
}, { timestamps: true })

const User = mongoose.model<IUser>('User',userSchema)
export default User