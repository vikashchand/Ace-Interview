"use client"
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/GeminiAIModal';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { Mic } from 'lucide-react';
import moment from 'moment/moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
import Webcam from 'react-webcam';
import { toast } from 'sonner';

function RecordAnsSection({ mockInterviewQuestions, activeQuestionIndex, interviewData }) {

  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  // Update userAnswer state with results
  useEffect(() => {
    results.map((result) => {
      setUserAnswer(result?.transcript);
    });
  }, [results]);

  // Save the user's answer when recording stops and the answer length is sufficient
  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswerInDb();
    }
  }, [userAnswer, isRecording]);

  // Reset userAnswer state when the active question changes
  useEffect(() => {
    setUserAnswer('');
  }, [activeQuestionIndex]);

  // Handle saving the user's answer
  const SaveUserAnswer = async () => {
    if (isRecording) {
      stopSpeechToText();
      setUserAnswer('');
    } else {
      startSpeechToText();
    }
  };

  // Handle starting and stopping the recording
  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  // Update the user's answer in the database
  const UpdateUserAnswerInDb = async () => {
    setLoading(true);

    const feedbackPrompt = `Question: ${mockInterviewQuestions[activeQuestionIndex]?.Question}, User Answer: ${userAnswer}. Based on the question and user's answer for the given interview question, please give a rating out of 10 for the answer and feedback as areas of improvement, if any, in just 3-5 lines in JSON format with rating field and feedback field.`;
    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockJsonResp = (await result.response.text()).replace('```json', '').replace('```', '');
    const JsonFeedbackResp = JSON.parse(mockJsonResp);

    const resp = await db.insert(UserAnswer).values({
      mockId: interviewData?.mockId,
      question: mockInterviewQuestions[activeQuestionIndex]?.Question,
      correctAns: mockInterviewQuestions[activeQuestionIndex]?.Answer,
      userAns: userAnswer,
      feedback: JsonFeedbackResp?.feedback,
      rating: JsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress.emailAddress,
      createdAt: moment().format('DD-MM-yyyy')
    });

    console.log("Response from DB insert: ", resp); // Debugging log

    if (resp) {
      toast('User Answer Recorded Successfully');
    } else {
      console.error("Failed to insert data into the database"); // Debugging log
    }

    setUserAnswer('');
    setLoading(false);
  };

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col my-20 justify-center items-center bg-black rounded-lg p-5 mt-20'>
        <Image src={'/assets/cam.png'} width={200} height={200} className='absolute' alt='hi' priority />
        <Webcam style={{ height: 300, width: '100%', zIndex: 10 }} mirrored={true} />
      </div>
      <Button disabled={loading} variant='outline' className='my-5' onClick={StartStopRecording}>
        {isRecording ? <h2 className='text-red-600 flex-gap-2'><Mic /> Stop Recording</h2> : 'Record Answer'}
      </Button>
    </div>
  );
}

export default RecordAnsSection;
