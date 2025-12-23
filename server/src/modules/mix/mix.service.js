import { ApiError } from "../../utils/ApiError.js";
import generateCode from "../../utils/codeGenerator.js";
import { MixRepository } from "./mix.repository.js";
import { forbidden_mixes_keys } from "../../config/constatnts.js";

export class MixService {
    static async getAll (userId) {
        const mixes = await MixRepository.getAll(userId)
        if (!mixes) throw new ApiError(204, 'No mixes found')
        return { mixes }
    }
    static async get (mixCode) {
        const mix = await MixRepository.getByCode(mixCode)
        if (!mix) throw new ApiError(204, 'No mix found')
        return { mix }
    }
    static async create(userId, timeLimit, type, isPublic, isRandom){
        const code = generateCode(16)
        await MixRepository.create(userId, timeLimit || 0, type || 0, code, isPublic || true, isRandom || false)
    }
    static async update (ownerId, mixId, fileds) {
        for (const key in fileds) {
            if (forbidden_mixes_keys.includes(key)) throw new ApiError(400, 'Wrong keys received')
            await MixRepository.updateById(ownerId, mixId, key, fileds[key])
        }
    }
    static async delete (ownerId, mixId) {
        await MixRepository.deleteById(ownerId, mixId)
    }
}