


import express from 'express'
import { registerCon,loginCon,authCon,loginAdminCon } from '../controllers/user'
import registerMid from '../middlewares/registerMid'
import loginMid from '../middlewares/loginMid'
import authMid from '../middlewares/authMid'
import adminMid from '../middlewares/adminMid'

const router  = express.Router()

router.post('/register',registerMid,registerCon)
router.post('/login',loginMid,loginCon)
router.get('/auth',authMid,authCon)
router.post('/loginAdmin',adminMid,loginAdminCon)

export default router
