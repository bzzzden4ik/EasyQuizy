import env from '../../config/env.js'
import { ApiError } from '../../utils/ApiError.js'
import generateCode from '../../utils/codeGenerator.js'
import { AuthService } from '../auth/auth.service.js'
import { PasswordService } from '../auth/password.service.js'
import { UserRepository } from './user.repository.js'

export class UserService {
    static async createUser (data) {
        const exists = await UserRepository.findByEmail(data.email)
        if (exists) throw new ApiError(409, 'User already exists')
        const passwordHash = await PasswordService.hash(data.password)
        const username = AuthService.generateUsername(data.email)
        const accessCode = generateCode(8)
        await UserRepository.create(data.email, passwordHash, username, accessCode)
    }
    static async loginUser (data) {
        const user = await UserRepository.findByUsername(data.username)
        if (!user) throw new ApiError(404, 'No user found')
        const comparePasswords = await PasswordService.compare(data.password, user.password)
        if (!comparePasswords) throw new ApiError(400, 'Wrong username or password')
        const access_token = AuthService.sign({id: user.id, username: user.username, level: user.level}, env.ACCESS_SECRET, '15m')
        const refresh_token = AuthService.sign({id: user.id, username: user.username, level: user.level}, env.REFRESH_SECRET, '30d')
        return {access_token, refresh_token}
    }
    static async profileUser () {
        
    }
}