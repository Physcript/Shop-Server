

import express from 'express'
import { createOrderCon } from '../controllers/order'
import createOrderMid from '../middlewares/createOrderMid'
const router = express.Router()



router.post('/order',createOrderMid,createOrderCon)


export default router
