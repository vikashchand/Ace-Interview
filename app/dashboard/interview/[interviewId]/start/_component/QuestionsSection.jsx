import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react';

function QuestionsSection({ mockInterviewQuestions, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser doesn\'t support text to audio');
    }
  };

  // Check for valid mockInterviewQuestions array
  if (!mockInterviewQuestions || !Array.isArray(mockInterviewQuestions) || mockInterviewQuestions.length === 0) {
    //console.error('No valid questions available');
    return <div>No questions available</div>;
  }

  // Check if activeQuestionIndex is within the bounds of the array
  if (activeQuestionIndex < 0 || activeQuestionIndex >= mockInterviewQuestions.length) {
   // console.error('Active question index is out of bounds:', activeQuestionIndex);
    return <div>Invalid question index</div>;
  }

  const currentQuestion = mockInterviewQuestions[activeQuestionIndex];

  // Log detailed information for debugging
  //console.log('Active Question Index:', activeQuestionIndex);
  //console.log('Current Question Object:', currentQuestion);

  // Access the 'question' property instead of 'Question'
  const questionText = currentQuestion?.question || "Question not available";

  return (
    <div className='p-5 border rounded-lg my-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestions.map((question, index) => (
          <div key={index}>
            <h2 className={`p-2 border rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex === index && 'bg-primary text-white'}`}>
              Question #{index + 1}
            </h2>
          </div>
        ))}
      </div>
      <div>
        <h2 className='my-5 text-md md:text-lg'>
          {questionText}
        </h2>

        <Volume2 onClick={() => { textToSpeech(questionText); }} />

        <div className='border rounded-lg p-5 bg-blue-100'>
          <div className='flex gap-2 items-center text-primary'>
            <Lightbulb />
            <strong>Note:</strong>
          </div>
          <p className='text-sm text-primary my-2'>
            Click on "Record answer" when you want to answer. At the end of the interview, we will give you feedback along with the correct answer for each question and your answer to compare it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuestionsSection;
