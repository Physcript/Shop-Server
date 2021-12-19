import { Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
import Product from '../models/Product'

import mongoose from 'mongoose'

export const CHK_TOKEN = async (token: string, res: Response) => {
    jwt.verify(token,`${config.TOKEN.LOGIN}`, (err,decode) => {
        if(err) {
            res.locals.user = false
        }else {
            res.locals.user = decode
        }
    })
}

export const CHK_USER = async (userId: string, res: Response) => {
    try {
        res.locals.user = await User.findById(new mongoose.Types.ObjectId(userId))
    }catch (e:any) {
        res.locals.user = false
    }
}

export const CHK_PRODUCT = async (productId: string, res: Response) => {
    try {
        res.locals.product = await Product.findById(new mongoose.Types.ObjectId(productId))
    }catch(e: any) {
        res.locals.product = false
    }
}