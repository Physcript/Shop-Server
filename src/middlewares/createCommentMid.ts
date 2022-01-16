
import { Request,Response,NextFunction } from 'express'
import { CHK_TOKEN,CHK_USER,CHK_PRODUCT } from './mainMid'
import mongoose from 'mongoose'

import Comment from '../models/Comment'

const createCommentMid = async (req: Request, res: Response, next: NextFunction) => {
       const  { body,name,email,userId,productId } = req.body

       const token = <string>req.headers.token || ''
       await CHK_TOKEN(token,res)
       const user = res.locals.user

       if(!user){
              res.status(404).json({
                     data: 'UNAUTHORIZED'
              })
              return
       }

       if(!CHK_DATA(req)) {
            res.status(400).json({
                   data: 'Invalid Action'
            })
              return
       }

       // check valid user
       await CHK_USER(userId, res)
       // check valid product
       await CHK_PRODUCT(productId,res)

       // save comment

       await SAVE_COMMENT(req)

       next()
}


const CHK_DATA = (req: Request) => {
       const  { body,name,email,userId,productId } = req.body
       if(body.trim() === '') {
              return false
       }
       if(name.trim() === '') {
              return false
       }
       if(userId.trim() === '') {
              return false
       }
       if(productId.trim() === '') {
              return false
       }
       return true
}

const SAVE_COMMENT = async (req: Request) => {

       const  { body,name,email,userId,productId } = req.body

       const comment = new Comment({
              body,
              name,
              email,
              userId: new mongoose.Types.ObjectId(userId),
              productId: new mongoose.Types.ObjectId(productId)
       })

       await comment.save()

}

export default createCommentMid