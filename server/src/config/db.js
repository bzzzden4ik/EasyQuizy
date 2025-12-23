import pg from 'pg'
import env from './env.js'

const { Pool } = pg

const pool = new Pool({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE
})

pool.on('connect', () => console.log('Connection success!'))
pool.on('error', () => console.log('Connection reject!'))

export { pool }