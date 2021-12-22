
import { Request,Response,NextFunction } from 'express'
import mongoose from 'mongoose'
import Order from '../models/Order'

const getOrderMid =  async (req: Request,res: Response,next: NextFunction) => {

  if( res.locals.user == false ) {
    res.status(401).json({
      data: 'UnAuthorized'
    })
    return
  }

  const order = await Order.find({ userId: res.locals.user._id})
  res.locals.user = ''
  res.locals.order = order
  next()
}

export default getOrderMid
