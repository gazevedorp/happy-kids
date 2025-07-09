import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';

const emotionGroups: Record<string, { main: string; group: string[] }> = {
  Happy: {
    main: 'Happy',
    group: ['Happy', 'Joy', 'Content', 'Pleased', 'Delighted', 'Cheerful'],
  },
  Excited: {
    main: 'Excited',
    group: ['Excited', 'Eager', 'Enthusiastic', 'Animated', 'Thrilled', 'Lively'],
  },
  Confused: {
    main: 'Confused',
    group: ['Confused', 'Uncertain', 'Perplexed', 'Baffled', 'Puzzled', 'Disoriented'],
  },
  Anxious: {
    main: 'Anxious',
    group: ['Anxious', 'Calm', 'Dread', 'Fear', 'Worry', 'Overwhelmed'],
  },
  Calm: {
    main: 'Calm',
    group: ['Calm', 'Peaceful', 'Relaxed', 'Serene', 'Composed', 'Tranquil'],
  },
};

const emotionData: Record<string, {
  image: string;
  name: string;
  description: string;
  family: string;
  whyImportant: string;
  whatIs: string;
  whyMatters: string;
  traits: string[];
}> = {
  Happy: {
    image: '/emotions/option-1 (8).png',
    name: 'Happy',
    description: 'Happiness is a positive emotional state characterized by feelings of joy, satisfaction, and contentment. It can be triggered by life events, achievements, or simply enjoying the present moment.',
    family: 'Happy Family',
    whyImportant: 'Happiness is linked to better health, stronger relationships, and greater success. Cultivating happiness can improve your quality of life.',
    whatIs: 'A state of well-being and contentment characterized by feelings of joy, satisfaction, and contentment.',
    whyMatters: 'Happiness is linked to better health, stronger relationships, and greater success. Cultivating happiness can improve your quality of life.',
    traits: ['Feeling of joy', 'Satisfaction', 'Contentment', 'Positive outlook', 'Optimism'],
  },
  Excited: {
    image: '/emotions/option-1 (6).png',
    name: 'Excited',
    description: 'Excitement is a high-energy emotion that arises when something positive or anticipated is about to happen. It is often accompanied by increased heart rate and enthusiasm.',
    family: 'Excited Family',
    whyImportant: 'Feeling excited can boost motivation and creativity. It helps us embrace new opportunities and face challenges with energy.',
    whatIs: 'A high-energy emotion that arises when something positive or anticipated is about to happen.',
    whyMatters: 'Feeling excited can boost motivation and creativity. It helps us embrace new opportunities and face challenges with energy.',
    traits: ['Increased heart rate', 'Enthusiasm', 'Optimism', 'Anticipation', 'Energy'],
  },
  Confused: {
    image: '/emotions/option-1 (3).png',
    name: 'Confused',
    description: 'Confusion is a state of uncertainty or lack of clarity. It can occur when information is unclear or when faced with complex situations.',
    family: 'Confused Family',
    whyImportant: 'Recognizing confusion allows us to ask questions and learn. It is a normal part of problem-solving and growth.',
    whatIs: 'A state of uncertainty or lack of clarity.',
    whyMatters: 'Recognizing confusion allows us to ask questions and learn. It is a normal part of problem-solving and growth.',
    traits: ['Uncertainty', 'Lack of clarity', 'Questioning', 'Learning', 'Problem-solving'],
  },
  Anxious: {
    image: '/emotions/option-1 (1).png',
    name: 'Anxious',
    description: 'Anxious thoughts or beliefs can be hard to control, and people may worry excessively. Anxiety is a natural human emotion involving worry, fear, and uneasiness, often experienced in anticipation of future events or situations. It can be a normal reaction to stress or can develop into an anxiety disorder if it becomes persistent and interferes with daily life. Anxiety disorders can be managed with therapy, though the overwhelming impulse lingers and can be difficult to control.',
    family: 'Anxious Family',
    whyImportant: 'Treatment for anxiety disorders includes therapy and medication. Anxiety can affect work, school, and relationships. If you are experiencing persistent anxiety that is interfering with your daily life, it is important to seek professional help.',
    whatIs: 'A natural human emotion involving worry, fear, and uneasiness, often experienced in anticipation of future events or situations.',
    whyMatters: 'Treatment for anxiety disorders includes therapy and medication. Anxiety can affect work, school, and relationships. If you are experiencing persistent anxiety that is interfering with your daily life, it is important to seek professional help.',
    traits: ['Worry', 'Fear', 'Uneasiness', 'Anticipation', 'Persistent'],
  },
  Calm: {
    image: '/emotions/option-1 (4).png',
    name: 'Calm',
    description: 'Calmness is a peaceful state of mind, free from agitation or excitement. It helps us think clearly and respond thoughtfully.',
    family: 'Calm Family',
    whyImportant: 'Being calm improves focus, reduces stress, and supports emotional well-being.',
    whatIs: 'A peaceful state of mind, free from agitation or excitement.',
    whyMatters: 'Being calm improves focus, reduces stress, and supports emotional well-being.',
    traits: ['Peaceful', 'Relaxed', 'Focused', 'Thoughtful', 'Reduced stress'],
  },
  // Fallback para emoções não mapeadas
  Default: {
    image: '',
    name: '',
    description: '',
    family: [],
    whyImportant: '',
    whatIs: '',
    whyMatters: '',
    traits: [],
  },
};

const userIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0B7C3" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" strokeLinecap="round" />
  </svg>
);
const bellIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0B7C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.07-1.64-5.64-5-5.958V4a1 1 0 10-2 0v1.042C6.64 5.36 5 7.929 5 11v3.159c0 .538-.214 1.055-.595 1.436L3 17h5m7 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);
const settingsIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0B7C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00 .33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01 0-4h.09a1.65 1.65 0 00 1.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 11 2.83-2.83l.06.06a1.65 1.65 0 00 1.82.33h.09a1.65 1.65 0 00 1-1.51V3a2 2 0 01 4 0v.09c0 .66.39 1.26 1 1.51a1.65 1.65 0 00 1.82-.33l.06-.06a2 2 0 11 2.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09c0 .66.39 1.26 1 1.51a1.65 1.65 0 00 1.51 1H21a2 2 0 01 0 4h-.09c-.66 0-1.26.39-1.51 1z" />
  </svg>
);

function getMainEmotion(emotion: string): string {
  for (const key in emotionGroups) {
    if (emotionGroups[key].group.map(e => e.toLowerCase()).includes(emotion.toLowerCase())) {
      return emotionGroups[key].main;
    }
  }
  // fallback: se não encontrar, retorna o próprio nome (pode ser um principal)
  return emotion;
}

const AtlasEmotionsInfo: React.FC = () => {
  const { emotion } = useParams<{ emotion: string }>();
  const mainEmotion = getMainEmotion(emotion || 'Happy');
  const data = emotionData[mainEmotion] || emotionData['Default'];

  return (
    <div className="relative min-h-screen flex bg-[#f9f9fa] font-[Poppins] overflow-x-hidden">
      <div className="hidden md:block absolute top-0 left-0 w-24 h-full z-0 opacity-50 pointer-events-none"></div>
      <div className="absolute top-4 right-4 sm:top-8 sm:right-14 z-20 flex gap-3">
        <button className="rounded-full bg-white p-2 border border-[#e0e6ed] shadow-sm">{userIcon}</button>
        <button className="rounded-full bg-white p-2 border border-[#e0e6ed] shadow-sm">{bellIcon}</button>
        <button className="rounded-full bg-white p-2 border border-[#e0e6ed] shadow-sm">{settingsIcon}</button>
      </div>
      <div className="relative z-20">
        <SideBar />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-6xl px-4 sm:px-8 py-8 mx-auto flex flex-col items-center justify-center">
          {/* Título e símbolo */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 w-full gap-4">
            <div className="flex items-center gap-3">
              <img src="/emotions/Mask group.png" alt="Atlas Icon" className="h-12 w-12 rounded-lg object-cover" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#8d53ff] to-[#5ddee6] bg-clip-text text-transparent mb-2 sm:mb-0">
                Atlas of Emotions
              </h1>
            </div>
          </div>
          {/* Card principal grande */}
          <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center mb-8">
            <div className="flex-shrink-0 flex items-center justify-center h-[320px] w-full max-w-[340px]">
              <img src={data.image} alt={data.name} className="rounded-2xl w-full h-full object-cover shadow-lg" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md flex flex-col justify-center min-h-[320px] min-w-0 w-full max-w-full overflow-hidden">
                {/* Removido o texto whatIs */}
                <div className="text-3xl font-extrabold text-[#8d53ff] mb-2 break-words">{data.name}</div>
                <div className="text-[#222] text-lg mb-2 break-words">{data.description}</div>
              </div>
            </div>
          </div>
          {/* Bloco inferior: why it matters + traits + formulário */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 w-full">
            <div className="bg-white rounded-2xl p-8 shadow-md min-h-[140px] flex flex-col justify-center md:col-span-1 overflow-hidden">
              <div className="text-[#8d53ff] font-bold text-2xl mb-2 break-words">Why it matters</div>
              <div className="text-[#222] text-lg break-words">{data.whyMatters}</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md min-h-[140px] flex flex-col justify-center md:col-span-1 overflow-hidden">
              <div className="text-[#8d53ff] font-bold text-2xl mb-2 break-words">Traits</div>
              <ul className="list-disc pl-5 text-[#222] text-lg">
                {data.traits.map((trait, i) => (
                  <li key={i}>{trait}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center md:col-span-1">
              <img src="/emotions/about-info.png" alt="About Info Form" className="rounded-2xl w-full max-w-md object-contain shadow-md bg-white p-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlasEmotionsInfo;
