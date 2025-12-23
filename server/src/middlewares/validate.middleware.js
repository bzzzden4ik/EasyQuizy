import jwt from 'jsonwebtoken'
import env from '../config/env.js'
import { ApiError } from '../utils/ApiError.js'

export default function validate(req, res, next){
    const access = req.cookies?.access
    if (!access) throw new ApiError(400, 'No token recieved')
    try {
        const result = jwt.verify(req.cookies?.access, env.ACCESS_SECRET)
        req.user = {id: result.id, level: result.level}
        return next()
    } catch (error) {
        throw new ApiError(403, 'Forbidden')
    }
}