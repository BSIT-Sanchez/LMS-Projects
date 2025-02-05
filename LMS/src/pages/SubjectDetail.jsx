import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById } from '../services/quizService';

const QuizDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quizData = await getQuizById(id);
        if (quizData && quizData.length > 0) {
          setQuiz(quizData[0]);
        } else {
          setQuiz(null);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          calculateScore();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [id]);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    calculateScore();
    alert('Quiz Submitted!');
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    quiz.questions.forEach((question) => {
      if (answers[question._id] === question.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  if (loading) return <div className="text-center text-xl font-semibold mt-10">Loading...</div>;
  if (!quiz) return <div className="text-center text-xl font-semibold mt-10">Quiz not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{quiz.title}</h1>
      <p className="text-gray-600 mb-6"><strong>Subject ID:</strong> {quiz.subjectId}</p>

      <div className="text-right mb-4">
        <h3 className="text-lg font-medium text-gray-700">
          Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </h3>
      </div>

      {quiz.questions && quiz.questions.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Questions:</h2>
          {quiz.questions.map((question, index) => (
            <div key={question._id} className="mb-6">
              <p className="text-lg font-medium text-gray-800 mb-2">
                {index + 1}. {question.questionText}
              </p>
              <ul className="space-y-2">
                {question.options.map((option, idx) => (
                  <li key={idx} className="flex items-center">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question-${question._id}`}
                        value={option}
                        checked={answers[question._id] === option}
                        onChange={() => handleAnswerChange(question._id, option)}
                        disabled={isSubmitted}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  </li>
                ))}
              </ul>
              {isSubmitted && (
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Your Answer:</strong> {answers[question._id]}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No questions available for this quiz.</p>
      )}

      {!isSubmitted && (
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            disabled={timeLeft <= 0}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            Submit Quiz
          </button>
        </div>
      )}

      {isSubmitted && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Your Score: {score}/{quiz.questions.length}</h2>
          <p className="text-gray-700">Quiz has been submitted. Thank you!</p>
        </div>
      )}
    </div>
  );
};

export default QuizDetail;
