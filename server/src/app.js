import express from 'express'
import env from './config/env.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './modules/user/user.routes.js'
import mixRouter from './modules/mix/mix.routes.js'
// import questionRouter from './modules/question/question.routes.js'
import errorHandler from './middlewares/error.middleware.js'

const app = express()

app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/mixes', mixRouter)
// app.use('/api/questions', questionRouter)
app.use(errorHandler)

app.listen(env.PORT, (err) => {
    if (err) console.log(err)
    else console.log(`Server started on http://localhost:${env.PORT}`)
})