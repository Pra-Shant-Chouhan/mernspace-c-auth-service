// import app from './app.js'
import app from './app.ts'
import { Config } from './config/index.ts'

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => console.log(`Listen on Port ${PORT}`))
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
startServer()
