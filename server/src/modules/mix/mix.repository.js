import { pool } from "../../config/db.js";

export class MixRepository {
    static async getAll (user_id) {
        const result = await pool.query('SELECT * FROM mixes WHERE owner_id = $1', [user_id])
        return result.rowCount !== 0 ? result.rows : null
    }
    static async getById (id) {
        const result = await pool.query('SELECT * FROM mixes WHERE id = $1', [id])
        return result.rowCount !== 0 ? result.rows[0] : null
    }
    static async getByCode (code) {
        const result = await pool.query('SELECT * FROM mixes WHERE code = $1', [code])
        return result.rowCount !== 0 ? result.rows[0] : null
    }
    static async create (ownerId, timeLimit, type, code, isPublic, isRandom, completed, score) {
        const result = await pool.query('INSERT INTO mixes(owner_id, time_limit, type, code, public, random, completed, score) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [ownerId, timeLimit, type, code, isPublic, isRandom, completed, score])
    }
    static async updateById (ownerId, mixId, key, value) {
        const result = await pool.query(`UPDATE mixes SET ${key} = $1 WHERE id = $2 AND owner_id = $3`, [value, mixId, ownerId])
    }
    static async updateByCode (ownerId, code, key, value) {
        const result = await pool.query('UPDATE mixes SET $1 = $2 WHERE code = $3 AND owner_id = $4', [key, value, code, ownerId])
    }
    static async deleteById (ownerId, mixId) {
        const result = await pool.query('DELETE FROM mixes WHERE owner_id = $1 AND id = $2', [ownerId, mixId])
    }
    static async deleteByCode (ownerId, code) {
        const result = await pool.query('DELETE FROM mixes WHERE owner_id = $1 AND code = $2', [ownerId, code])
    }
}