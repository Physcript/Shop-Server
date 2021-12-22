
import { Request,Response,NextFunction } from 'express'
import Order from '../models/Order'


const createOrderMid = async (req: Request, res: Response, next: NextFunction) => {
  const { cart,count,total,userId } = req.body

  if( res.locals.user == false ) {
    res.status(401).json({
      error: 'UnAuthorized'
    })
    return
  }

  const order = new Order({
    cart,
    count,
    total,
    userId
  })
  await order.save()
  next()

}

export default createOrderMid
