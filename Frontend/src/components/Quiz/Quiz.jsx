import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSkinType, resetSkinType } from "../../redux/quizRedux"; 
import quizQuestions from "./quizQuestions"; 
import RecommendedProducts from "../recommendproduct";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const dispatch = useDispatch();

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    const next = currentQuestion + 1;
    if (next < quizQuestions.length) {
      setCurrentQuestion(next);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const count = {};
    finalAnswers.forEach((type) => {
      count[type] = (count[type] || 0) + 1;
    });

    const skinType = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );

    setResult(skinType);
    dispatch(setSkinType(skinType));
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    dispatch(resetSkinType());
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {result ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4"> Your Skin Type is:</h2>
          <p className="text-xl text-gray-600 capitalize font-bold">{result}</p>
          <button
            onClick={restartQuiz}
            className="mt-6 px-6 py-2 bg-[#d1d5db] text-black rounded-lg hover:bg-gray-500 hover:text-white transition"
          >
            Retake Quiz
          </button>
          <RecommendedProducts />
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h2>
          <div className="space-y-3">
            {quizQuestions[currentQuestion].options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(opt.type)}
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 transition"
              >
                {opt.answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
