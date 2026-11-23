import { config } from 'dotenv'
import { fileURLToPath } from 'node:url'

config({
    quiet: true,
    path: fileURLToPath(
        new URL(`../../.env.${process.env.NODE_ENV}`, import.meta.url),
    ),
})

const { PORT, NODE_ENV, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } =
    process.env

export const Config = {
    PORT,
    NODE_ENV,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
}
