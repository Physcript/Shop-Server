
import { Response,Request } from 'express'

export const createOrderCon = (req: Request, res: Response) => {
  res.status(200).json({
    data:'creating Order'
  })
}

export const getOrderCon = (req: Request,res: Response) => {
  res.status(200).json({
    data: res.locals.order
  })
  res.locals.order = ''
  return
}
