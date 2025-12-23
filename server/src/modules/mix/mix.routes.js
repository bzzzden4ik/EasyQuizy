import { Router } from 'express'
import { MixController } from './mix.controller.js'
import validate from '../../middlewares/validate.middleware.js'

const router = Router()

router.get('/', validate, MixController.getAll)
router.post('/', validate, MixController.create)
router.get('/:mix_code', validate, MixController.get)
router.delete('/:mix_id', validate, MixController.delete)
router.patch('/:mix_id', validate, MixController.update)

export default router