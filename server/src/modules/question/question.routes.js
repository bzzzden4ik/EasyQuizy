import { Router } from 'express'
import { QuestionController } from './question.controller.js'
import validate from '../../middlewares/validate.middleware.js'

const router = Router()

router.get('/', validate, QuestionController.getAll)
router.post('/', validate, QuestionController.create)
router.get('/:question_id', validate, QuestionController.get)
router.delete('/:question_id', validate, QuestionController.delete)
router.patch('/:question_id', validate, QuestionController.update)

export default router