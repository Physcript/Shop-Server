
import { Response,Request } from 'express'

export const createOrderCon = (req: Request, res: Response) => {
  res.status(200).json({
    data:'creating Order'
  })
}
