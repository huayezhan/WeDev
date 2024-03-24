import express from 'express'
import * as surveyController from '../controllers/survey.controller.js';

const router = express.Router()

router.post('/', surveyController.createSurvey);
router.put('/:user_id', surveyController.updateSurvey);
router.get('/', surveyController.getAllSurveys);
router.get('/:user_id', surveyController.getSurvey);
router.delete('/:user_id', surveyController.deleteSurvey);

export default router;