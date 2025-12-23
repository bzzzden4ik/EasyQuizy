import bcrypt from 'bcrypt'

export class PasswordService {
    static async hash (password) {
        return await bcrypt.hash(password, 10)
    }
    static async compare (password, passwordHash){
        return await bcrypt.compare(password, passwordHash)
    }
}