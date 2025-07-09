import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

const emotionData: Record<string, {
  image: string;
  name: string;
  whatIs: string;
  description: string;
  family: string[];
  highlight: string;
  whyMatters: string;
  traits: string[];
}> = {
  Anxious: {
    image: '/emotions/option-1 (1).png',
    name: 'Anxious',
    whatIs: 'What it is',
    description: 'Anxious thoughts or beliefs can be hard to control, and people may worry excessively. Anxiety is a natural human emotion involving worry, fear, and uneasiness, often experienced in anticipation of future events or situations. It can be a normal reaction to stress or can develop into an anxiety disorder if it becomes persistent and interferes with daily life. Anxiety disorders can be managed with therapy, though the overwhelming impulse lingers and can be difficult to control.',
    family: ['Calm', 'Dread', 'Fear', 'Worry', 'Overwhelmed'],
    highlight: 'Anxiety is a natural human emotion involving worry, fear, and uneasiness, often experienced in anticipation of future events or situations',
    whyMatters: 'Treatment for anxiety disorders includes therapy and medication. Anxiety can affect work, school, and relationships. If you are experiencing persistent anxiety that is interfering with your daily life, it is important to seek professional help.',
    traits: ['High Energy', 'Future Oriented', 'Negative Polarity'],
  },
  Happy: {
    image: '/emotions/option-1 (8).png',
    name: 'Happy',
    whatIs: 'What it is',
    description: 'Happiness is a positive emotional state characterized by feelings of joy, satisfaction, and contentment. It can be triggered by life events, achievements, or simply enjoying the present moment.',
    family: ['Joy', 'Content', 'Pleased', 'Delighted', 'Cheerful'],
    highlight: 'Happiness is a positive emotional state that can improve health and relationships.',
    whyMatters: 'Happiness is linked to better health, stronger relationships, and greater success. Cultivating happiness can improve your quality of life.',
    traits: ['Positive', 'Energized', 'Optimistic'],
  },
  Excited: {
    image: '/emotions/option-1 (6).png',
    name: 'Excited',
    whatIs: 'What it is',
    description: 'Excitement is a high-energy emotion that arises when something positive or anticipated is about to happen. It is often accompanied by increased heart rate and enthusiasm.',
    family: ['Eager', 'Enthusiastic', 'Animated', 'Thrilled', 'Lively'],
    highlight: 'Excitement motivates us to pursue new experiences and challenges.',
    whyMatters: 'Feeling excited can boost motivation and creativity. It helps us embrace new opportunities and face challenges with energy.',
    traits: ['High Energy', 'Forward-Looking', 'Positive'],
  },
  Confused: {
    image: '/emotions/option-1 (3).png',
    name: 'Confused',
    whatIs: 'What it is',
    description: 'Confusion is a state of uncertainty or lack of clarity. It can occur when information is unclear or when faced with complex situations.',
    family: ['Uncertain', 'Perplexed', 'Baffled', 'Puzzled', 'Disoriented'],
    highlight: 'Confusion can be a signal to slow down and seek more information.',
    whyMatters: 'Recognizing confusion allows us to ask questions and learn. It is a normal part of problem-solving and growth.',
    traits: ['Uncertain', 'Reflective', 'Open to Learning'],
  },
  Calm: {
    image: '/emotions/option-1 (4).png',
    name: 'Calm',
    whatIs: 'What it is',
    description: 'Calmness is a peaceful state of mind, free from agitation or excitement. It helps us think clearly and respond thoughtfully.',
    family: ['Peaceful', 'Relaxed', 'Serene', 'Composed', 'Tranquil'],
    highlight: 'Calmness allows us to manage stress and make better decisions.',
    whyMatters: 'Being calm improves focus, reduces stress, and supports emotional well-being.',
    traits: ['Low Energy', 'Balanced', 'Resilient'],
  },
};

const AtlasEmotionsExplain: React.FC = () => {
  const { emotion } = useParams<{ emotion: string }>();
  const data = emotionData[emotion || 'Anxious'] || emotionData['Anxious'];
  const navigate = useNavigate();

  // Copiar ícones do AtlasEmotions.tsx
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

  return (
    <div className="relative min-h-screen flex bg-[#f9f9fa] font-[Poppins]">
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 w-full gap-4">
            <div className="flex items-center gap-3">
              <img src="/emotions/Mask group.png" alt="Atlas Icon" className="h-12 w-12 rounded-lg object-cover" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#8d53ff] to-[#5ddee6] bg-clip-text text-transparent mb-2 sm:mb-0">
                Atlas of Emotions
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8 items-start w-full justify-center">
              <div className="flex-shrink-0 flex items-center justify-center h-[340px] w-[340px]">
                <img src={data.image} alt={data.name} className="rounded-2xl w-full h-full object-cover shadow-lg" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-white rounded-2xl p-10 shadow-md flex flex-col justify-center h-[340px] min-w-[320px] max-w-[700px]">
                  <div className="text-[#8d53ff] font-bold text-2xl mb-2">What it is</div>
                  <div className="text-3xl font-extrabold text-[#8d53ff] mb-2">{data.name}</div>
                  <div className="text-[#222] text-lg mb-2">{data.description}</div>
                </div>
              </div>
            </div>
            {/* Destaque e chips fora do bloco branco, centralizados */}
            <div className="flex flex-col items-center w-full mt-2">
              <div className="bg-[#f3f0fd] rounded-xl p-4 text-[#8d53ff] font-semibold mb-3 text-base sm:text-lg max-w-3xl w-full text-center">
                <span>{data.highlight}</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-2 justify-center">
                {data.family.map((fam, i) => (
                  <span
                    key={i}
                    className="bg-white border-2 border-[#8d53ff] text-[#8d53ff] rounded-full px-6 py-2 text-base font-semibold shadow-sm cursor-pointer hover:bg-[#f3f0fd] transition"
                    onClick={() => navigate(`/atlas-emotion-info/${encodeURIComponent(fam)}`)}
                  >
                    {fam}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full">
              <div className="bg-white rounded-2xl p-8 shadow-md min-h-[140px] flex flex-col justify-center">
                <div className="text-[#8d53ff] font-bold text-2xl mb-2">Why it matters</div>
                <div className="text-[#222] text-lg">{data.whyMatters}</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md min-h-[140px] flex flex-col justify-center">
                <div className="text-[#8d53ff] font-bold text-2xl mb-2">Traits</div>
                <ul className="list-disc pl-5 text-[#222] text-lg">
                  {data.traits.map((trait, i) => (
                    <li key={i}>{trait}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlasEmotionsExplain;
