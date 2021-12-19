

import express from 'express'
import { createComment } from '../controllers/comment'
import createCommentMid from '../middlewares/createCommentMid'
const router = express.Router()

router.post('/comment',createCommentMid,createComment)

export default router
