


import express from 'express'
import { registerCon,loginCon,authCon } from '../controllers/user'
import registerMid from '../middlewares/registerMid'
import loginMid from '../middlewares/loginMid'
import authMid from '../middlewares/authMid'

const router  = express.Router()

router.post('/register',registerMid,registerCon)
router.post('/login',loginMid,loginCon)
router.get('/auth',authMid,authCon)

export default router