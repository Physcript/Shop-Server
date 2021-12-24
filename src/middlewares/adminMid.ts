
import { Request,Response,NextFunction} from 'express'
import User from '../models/User'

const adminMid = (req:Request,res:Response,next:NextFunction) => {
  const { password } = req.body
  if(password === 'batino123') {
    next()
  }else {
    res.status(401).json({
      data:'UNAUTHORIZED'
    })
    return
  }
}

export default adminMid
