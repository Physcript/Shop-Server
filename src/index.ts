

import express from 'express'
import cors from 'cors'
import config from './config'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import router from './routes'
import { createServer } from 'http'

const app = express()
const httpServer = createServer(app)
const corsOptions = {
    origin: true,
    credentials: true

}
// set up

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use(cookieParser())

// corsPolicy
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','https://condescending-dubinsky-a9f266.netlify.app/')
    res.setHeader('Access-Control-Allow-Methods', 'PUT,PATCH,DELETE,GET,POST,OPTIONS')
    res.setHeader('Access-Control-Allow-headers', 'X-Requested-With,Content-Type')
    res.setHeader('Access-Control-Allow-credentials', 'true')
    next()
})

// middleware
app.use((req,res,next) => {
    console.log(`METHOD: ${req.method} URL: ${req.url}`)
    next()
})

// route
app.use('/api',router.userRoutes)
app.use('/api',router.productRoutes)
app.use('/api',router.commentRoutes)
app.use('/api',router.orderRoutes)

// error
app.use((req,res) => {
    res.status(404).json({ error: 'Not Found' })
})


// server start
mongoose.connect(`${config.MONGO.URL}`, config.MONGO.OPTIONS)
    .then(() => console.log(`DATABASE CONNECTED`))
    .catch((err) => console.log(`NETWORK ERROR ${ err }`))

httpServer.listen(config.SERVER.PORT, () => console.log(`SERVER: ${config.SERVER.HOST}:${config.SERVER.PORT}`))
