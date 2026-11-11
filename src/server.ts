// import app from './app.js'
import app from './app.ts'
import { Config } from './config/index.ts'
import logger from './config/logger.ts'

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => {
            logger.info(`Server listening on port ${PORT}`)
        })
    } catch (err) {
        logger.error(err)
        process.exit(1)
    }
}
startServer()
