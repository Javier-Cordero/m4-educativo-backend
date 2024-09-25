import { Router } from "express"
import AnswersController from '../controllers/answers.controller.js'
const router = Router()
router.get('/', AnswersController.getAnswer)
router.get('/:id', AnswersController.getAnswerId)
router.post('/', AnswersController.saveAnswer)
export default router