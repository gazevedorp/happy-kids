import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import SideBar from './SideBar';

const quizSteps = [
  {
    question: "Okay superstar, let's talk about something way more real. 💭 Have you ever wondered, 'Wait... what if I’m actually boring?! 😳'",
    options: [
      { label: 'Yes' },
      { label: 'Sometimes... 🤔' },
      { label: 'Not really! 😁' },
    ],
  },
  {
    question: "Well, guess what? Everyone wonders that sometimes. Even me! (I once thought my robot dance was boring... can you believe it? 🤖💃) But here’s a secret: nobody is truly boring. Pinky promise. Let’s explore this together—and discover what makes you totally interesting! Ready? Let’s goooo! 🚀✨",
    options: [
      { label: "Ok! Let's go!" },
    ],
  },
  {
    question: "First, tell me—what do YOU think makes someone interesting? 🤔",
    options: [
      { label: 'A lot of followers on social media.' },
      { label: 'Always look stylish.' },
      { label: 'Amazing at sports or a special skill.' },
      { label: 'Know the latest music and memes.' },
      { label: 'Always seem confident.' },
    ],
  },
  {
    question: "Thanks for sharing that! It’s totally normal to think those things are cool. But wanna hear a twist? These things don’t really make someone interesting. 😳 Let’s flip the script...",
    options: [
      { label: 'Really? None of them?' },
    ],
  },
  {
    question: "Okay, now tell me what you think actually makes someone interesting—REAL TALK style. 🎤💥",
    options: [
      { label: 'Honest about their struggles.' },
      { label: 'Not afraid to be vulnerable.' },
      { label: 'Admit they don’t have it all figured out.' },
      { label: 'Have a quirky or deep sense of humor.' },
      { label: 'Say stuff others are too shy to say.' },
    ],
  },
  {
    question: "Whoa, that’s powerful stuff! People who share their real thoughts and feelings? Those are the ones we remember. And guess what? You can be that person too! Yep, totally get it. It’s super common! But remember: the most unforgettable people are the ones who dare to be themselves—even if it feels awkward at first! Hope you liked this talk! See You later!",
    options: [
      { label: 'Interesting... Thanks Lulu!' },
    ],
  },
];

const SurpriseMe: React.FC = () => {
  const { user } = useAuth();
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => setStarted(true);

  const handleOptionClick = (option: string) => {
    setAnswers([...answers, option]);
    setCurrentStep((prev) => prev + 1);
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleSkip = () => setCurrentStep((prev) => prev + 1);

  // Layout inicial
  if (!started) {
    return (
      <div className="flex min-h-screen bg-[#f4f4f4]">
        <SideBar />
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <div className="flex justify-end items-center w-full h-20 px-10 pt-6">
            <span className="mr-3 text-lg font-semibold text-[#222]">Hi, {user?.username || 'User'}</span>
            <img src="/logo_happy_kids.png" alt="Logo" className="h-10 w-10 rounded-full border-2 border-[#8d53ff] bg-white object-contain" />
          </div>
          {/* Main content */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <img
              src="/lulu_bot_novo.png"
              alt="Lulu Bot"
              className="w-[380px] h-auto mb-5 max-w-full"
            />
            <div className="bg-white rounded-[40px] px-14 py-8 mb-2 flex flex-col items-center shadow-md">
              <span className="text-3xl font-extrabold mb-2 tracking-tight text-[#222]">Surprise me</span>
              <span className="text-lg text-gray-600 font-medium">Self-test: Am I boring</span>
            </div>
            <button
              className="bg-[#40E0D0] text-white text-[2rem] px-[60px] py-[28px] rounded-[40px] border-none cursor-pointer transition-colors duration-300 ease-in-out font-extrabold shadow-lg hover:bg-[#2fcfc0] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#40E0D0] focus:ring-opacity-50 mt-2"
              id="start-onboarding"
              onClick={handleStart}
            >
              Lëtz Start!
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz
  const step = quizSteps[currentStep];
  if (!step) {
    return (
      <div className="flex min-h-screen bg-[#f4f4f4]">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <div className="flex justify-end items-center w-full h-20 px-10 pt-6">
            <span className="mr-3 text-lg font-semibold text-[#222]">Hi, {user?.username || 'User'}</span>
            <img src="/logo_happy_kids.png" alt="Logo" className="h-10 w-10 rounded-full border-2 border-[#8d53ff] bg-white object-contain" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="bg-white rounded-3xl shadow-xl px-12 py-12 flex flex-col items-center">
              <span className="text-2xl font-bold mb-4">Quiz finished! 🎉</span>
              <span className="text-lg text-gray-600 mb-6">Thank you for participating!</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f4f4f4]">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-end items-center w-full h-20 px-10 pt-6">
          <span className="mr-3 text-lg font-semibold text-[#222]">Hi, {user?.username || 'User'}</span>
          <img src="/logo_happy_kids.png" alt="Logo" className="h-10 w-10 rounded-full border-2 border-[#8d53ff] bg-white object-contain" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="bg-white rounded-3xl shadow-xl px-12 py-12 min-w-[420px] max-w-[700px] w-full flex flex-col items-center">
            <span className="text-3xl font-extrabold mb-2 tracking-tight text-[#222] text-left w-full">{`Step ${currentStep + 1} of ${quizSteps.length}`}</span>
            <span className="text-xl font-medium mb-8 text-left w-full">{step.question}</span>
            <div className="flex flex-wrap gap-4 mb-8 w-full justify-center">
              {step.options.map((opt, idx) => (
                <button
                  key={idx}
                  className="bg-[#8d53ff] text-white text-lg font-semibold rounded-full px-8 py-3 shadow-md hover:bg-[#6d3fd1] transition-all"
                  onClick={() => handleOptionClick(opt.label)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              <button
                className="bg-gray-200 text-gray-700 font-semibold rounded-lg px-6 py-2 hover:bg-gray-300 transition-all"
                onClick={handleSkip}
              >
                Skip
              </button>
              <button
                className="bg-gray-200 text-gray-700 font-semibold rounded-lg px-6 py-2 hover:bg-gray-300 transition-all"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurpriseMe;
