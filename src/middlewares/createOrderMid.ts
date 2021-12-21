
import { Request,Response,NextFunction } from 'express'
import Order from '../models/Order'


const createOrderMid = async (req: Request, res: Response, next: NextFunction) => {
  const { cart,count,total,userId } = req.body

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
