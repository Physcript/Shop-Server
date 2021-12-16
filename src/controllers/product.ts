
import { Response,Request } from 'express'

export const getAllProductCon = (req: Request, res: Response) => {
    res.status(200).json({
        data: res.locals.product
    })
    res.locals.product = ''
    return
}
export const getOneProductCon = (req: Request, res: Response) => {
    res.status(200).json({
        data: res.locals.product
    })
    res.locals.product = ''
    return
}