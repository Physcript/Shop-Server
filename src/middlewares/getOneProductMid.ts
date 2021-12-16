
import { Response,Request,NextFunction } from "express";
import Product from '../models/Product'
import {IProduct} from "../interfaces/product";

const getOneProductMid = async (req: Request,res: Response,next: NextFunction) => {
    const { id } = req.body

    const product = await Product.findOne({id : id})

    if(!product) {
        res.status(400).json({
            data: 'Invalid Product'
        })
        return
    }

    const OBJ_PRODUCT:IProduct = product
    res.locals.product = OBJ_PRODUCT
    next()
}

export default getOneProductMid