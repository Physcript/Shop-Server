
import { Request,Response,NextFunction } from 'express'
import Product from '../models/Product'

const getAllProductMid = async (req: Request, res: Response, next: NextFunction) => {
    res.locals.product = await Product.find({})
    next()
}


export default getAllProductMid