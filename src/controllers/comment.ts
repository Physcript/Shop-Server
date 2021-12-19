

import { Request,Response } from 'express'

export const createComment = (req: Request,res: Response) => {
    res.status(200).json({
        data: 'create comment'
    })
}