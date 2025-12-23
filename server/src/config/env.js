import 'dotenv/config'

const env = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DP_HOST,
    DB_PORT: process.env.DP_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    ACCESS_SECRET: process.env.ACCESS_SECRET,
    REFRESH_SECRET: process.env.REFRESH_SECRET
}

export default env