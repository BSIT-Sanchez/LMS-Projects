import express from 'express';
import { createQuiz, getQuizzesBySubject, getQuizById } from '../controllers/quizController.js';

const router = express.Router();

router.post('/create', createQuiz);
router.get('/subject/:subjectId', getQuizzesBySubject);
router.get('/:id', getQuizById);

export default router;
