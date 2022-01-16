


import express from 'express'
import getAllProductMid from '../middlewares/getAllProductMid'
import {getAllProductCon, getOneProductCon} from '../controllers/product'
import getOneProductMid from "../middlewares/getOneProductMid";
const router = express.Router()

router.get('/product',getAllProductMid,getAllProductCon)
router.post('/one-product',getOneProductMid,getOneProductCon)

export default router