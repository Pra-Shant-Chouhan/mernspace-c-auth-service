import express, {
    type NextFunction,
    type Request,
    type Response,
} from 'express'
import type { HttpError } from 'http-errors'
import logger from './config/logger.ts'
// import createHttpError from 'http-errors'

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Auth Service!')
})
// app.get('/', async (req, res, next) => {
//     const err = createHttpError(401, 'You can not access this route')
//     throw err // async function , server crash in Express js 4 not in express js 5 versions
//     // next(err)
//     // res.send('Welcome to Auth Service!')
// })

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message)
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    })
})

export default app
