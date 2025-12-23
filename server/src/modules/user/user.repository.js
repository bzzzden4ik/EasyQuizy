import { pool } from '../../config/db.js'

export class UserRepository {
    static async findByEmail(email){
        const result = await pool.query('SELECT id, email, username, password, level FROM users WHERE email = $1', [email])
        return result.rows[0] || false
    }
    static async findByUsername(username){
        const result = await pool.query('SELECT id, email, username, password, level FROM users WHERE username = $1', [username])
        return result.rows[0] || false
    }
    static async create(email, password, username, access_code){
        await pool.query('INSERT INTO users(email, password, username, access_code) VALUES($1, $2, $3, $4)', [email, password, username, access_code])
    }   
}