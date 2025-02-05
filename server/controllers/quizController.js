import Quiz from '../models/quizModel.js';

// Create a new quiz
export const createQuiz = async (req, res) => {
  try {
    const { subjectId, title, questions } = req.body;
    const newQuiz = new Quiz({ subjectId, title, questions });
    await newQuiz.save();
    res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
  } catch (error) {
    res.status(500).json({ message: 'Error creating quiz', error: error.message });
  }
};

// Get quizzes by subject ID
export const getQuizzesBySubject = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ subjectId: req.params.subjectId });
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quizzes', error: error.message });
  }
};

// Get a quiz by ID
export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('subjectId');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quiz', error: error.message });
  }
};
