import { catchAsync } from '../../utils/catchAsync.js'
import { MixService } from './mix.service.js'

export class MixController {
    static getAll = catchAsync(async (req, res) => {
        const { id, level, username } = req.user
        const mixes = await MixService.getAll(id)
        res.status(200).json(mixes)
    })
    static get = catchAsync(async (req, res) => {
        const mix_code = req.params['mix_code']
        const mix = await MixService.get(mix_code)
        res.status(200).json(mix)
    })
    static create = catchAsync(async (req, res) => {
        const { id, level, username } = req.user
        const { time_limit, type, is_public, is_random } = req.body
        await MixService.create(id, time_limit, type, is_public, is_random)
        res.status(201).json({msg: 'created'})
    })
    static update = catchAsync(async (req, res) => {
        const { id, level, username } = req.user
        const mix_id = req.params['mix_id']
        const { fields } = req.body
        await MixService.update(id, mix_id, fields)
        res.status(200).json({msg: 'updated'})
    })
    static delete = catchAsync(async (req, res) => {
        const { id, level, username } = req.user
        const mix_id = req.params['mix_id']
        await MixService.delete(id, mix_id)
        res.status(200).json({msg: 'deleted'})
    })
}