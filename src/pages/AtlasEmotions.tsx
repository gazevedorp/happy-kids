import React from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';

const grid1 = [
  { label: 'Happy', src: '/emotions/option-1 (8).png' },
  { label: 'Excited', src: '/emotions/option-1 (6).png' },
  { label: 'Confused', src: '/emotions/option-1 (3).png' },
  { label: 'Anxious', src: '/emotions/option-1 (1).png' },
  { label: 'Happy', src: '/emotions/option-1 (8).png' },
  { label: 'Excited', src: '/emotions/option-1 (6).png' },
  { label: 'Confused', src: '/emotions/option-1 (2).png' },
  { label: 'Anxious', src: '/emotions/option-1 (1).png' },
  { label: 'Happy', src: '/emotions/option-1 (7).png' },
  { label: 'Excited', src: '/emotions/option-1 (5).png' },
  { label: 'Calm', src: '/emotions/option-1 (4).png' },
  { label: 'Anxious', src: '/emotions/option-1.png' },
];

const emotionImages: Record<string, string> = {
  Happy: '/emotions/option-1 (8).png',
  Happier: '/emotions/option-1 (7).png',
  Excited: '/emotions/option-1 (6).png',
  Confused: '/emotions/option-1 (2).png',
  Anxious: '/emotions/option-1 (1).png',
  Calm: '/emotions/option-1 (4).png',
};

const searchIcon = (
  <svg width="20" height="20" fill="url(#grad1)" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8d53ff" />
        <stop offset="100%" stopColor="#5ddee6" />
      </linearGradient>
    </defs>
    <circle cx="11" cy="11" r="7" stroke="url(#grad1)" strokeWidth="2" fill="none" />
    <path d="M21 21l-4.35-4.35" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

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

const AtlasEmotions: React.FC = () => {
  const navigate = useNavigate();
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
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
              <div className="relative flex items-center w-full max-w-[90vw] sm:max-w-xs">
                <input
                  type="text"
                  placeholder="Search emotions/articles"
                  className="rounded-[16px] border border-[#e0e6ed] bg-white pl-10 pr-4 py-2 text-sm sm:text-base text-[#222] shadow-sm w-full focus:outline-none h-10"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">{searchIcon}</span>
              </div>
              <button className="ml-0 rounded-full w-10 h-10 flex items-center justify-center bg-transparent shadow-none border-none p-0" title="Cards">
                <img src="/emotions/create-cta.png" alt="Create CTA" className="w-10 h-10 object-contain" />
              </button>
            </div>
          </div>
          <div className="w-full text-[#222] font-bold text-base sm:text-lg mb-1 text-left">Families of Emotions</div>
          <div className="border-b border-[#e0e6ed] mb-4 sm:mb-6 w-full" style={{ borderWidth: '1px' }}></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {grid1.map((emo, idx) => (
              <div key={idx} className="rounded-xl cursor-pointer w-full flex items-center justify-center bg-transparent" style={{height: '220px', minHeight: '120px'}} onClick={() => navigate(`/atlas-emotion-explain/${encodeURIComponent(emo.label)}`)}>
                <img src={emo.src} alt={emo.label} className="w-full h-full object-contain" style={{borderRadius: '1.2rem', maxHeight: '220px', maxWidth: '100%', background: '#fff'}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlasEmotions;
