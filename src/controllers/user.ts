
import { Request,Response } from 'express'

export const registerCon = (req:Request,res:Response) => {
    const { email } = req.body
    res.status(200).json({ data: { email } })
    return
}

export const loginCon = (req:Request, res:Response) => {

    res.status(200).json({ data: {
            user: res.locals.user,
            token: res.locals.token
        } })

    res.locals.user = undefined
    res.locals.token = undefined

    return
}


export const authCon = (req:Request,res: Response) => {
    if( res.locals.user ) {
        res.status(200).json({
            data: {
                user: res.locals.user,
                token: req.cookies
            }
        })
    }else {
        res.status(401).json({
            data: 'Unauthorized'
        })
    }
    res.locals.user = ''
    return
}


export const loginAdminCon = (req: Request, res: Response) => {
  res.status(200).json({
      data: 'Login'
  })
}
