

import express from 'express'
import { createOrderCon,getOrderCon } from '../controllers/order'
import createOrderMid from '../middlewares/createOrderMid'
import getOrderMid from '../middlewares/getOrderMid'
import authMid from '../middlewares/authMid'
const router = express.Router()



router.post('/order',authMid,createOrderMid,createOrderCon)
router.get('/order',authMid,getOrderMid,getOrderCon)


export default router
