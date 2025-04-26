import React from 'react';
import Quiz from '../components/Quiz/Quiz.jsx';

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold text-black mb-6">Find Your Skin Type</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md hover:bg-gray-100 hover:text-black transition-colors duration-300">
        <Quiz />
      </div>
    </div>
  );
};

export default QuizPage;