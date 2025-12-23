import jwt from 'jsonwebtoken'
import { ApiError } from '../../utils/ApiError.js'

export class AuthService {
    static sign (data, secret, expiresIn) {
        try {
            const token = jwt.sign(data, secret, {expiresIn: expiresIn})
            return token
        } catch (error) {
            throw new ApiError(500, 'Server error')
        }
    }
    static verify (token, secret) {
        try {
            const data = jwt.compare(token, secret)
            return data ? data : false
        } catch (error) {
            if (error.name === 'TokenExpiredError') throw new ApiError(401, 'Token expired')
            throw new ApiError(401, 'Invalid token')
        }
    }
    static generateUsername (email) {
        const currentDate = new Date();
        return `${currentDate.getHours()}-${currentDate.getSeconds()}-equ-${email.slice(0, 4)}-${currentDate.getFullYear()}`
    }
}