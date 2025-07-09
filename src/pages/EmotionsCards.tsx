import React from 'react';
import SideBar from './SideBar'; // Certifique-se de que este caminho está correto para seu arquivo SideBar
import { useNavigate } from 'react-router-dom';

// --- Dados das Emoções ---
// Mantemos grid1 e grid2 como no seu código fornecido,
// pois a imagem mostra exatamente dois conjuntos distintos.
const grid1 = [
  'Calm', 'Low', 'Stressed', 'Worried', 'Happy',
  'Sad', 'Angry', 'Anxious', 'Excited', 'Tired',
  'Mad', 'Nervous',
];

const grid2 = [
  'Tired', 'Nervous', 'Angry', 'Anxious', 'Mad', 'Stressed',
];

// --- Ícones SVG com gradientes e cores específicas ---

const searchIcon = (
  <svg width="20" height="20" fill="url(#grad1)" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"> {/* Adjusted for better gradient direction */}
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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09c0 .66.39 1.26 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c0 .66.39 1.26 1 1.51a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09c-.66 0-1.26.39-1.51 1z" />
  </svg>
);

// --- Componente Principal ---
const EmotionsCards: React.FC = () => {
  const navigate = useNavigate();
  return (
    // Contêiner principal com background gradiente no lado esquerdo (simulando a SideBar)
    <div className="relative min-h-screen flex bg-[#f9f9fa] font-[Poppins]">
      {/* Overlay para o gradiente da esquerda que se estende por toda a altura */}
      <div className="hidden md:block absolute top-0 left-0 w-24 h-full bg-gradient-to-b from-[#8D53FF] to-[#5DDEE6] z-0 opacity-50 pointer-events-none"></div>

      {/* Ícones fixos no topo direito */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-14 z-20 flex gap-3">
        <button className="rounded-full bg-white p-2 border border-[#e0e6ed] shadow-sm">{userIcon}</button>
        <button className="rounded-full bg-white p-2 border border-[#e0e6ed] shadow-sm">{bellIcon}</button>
        <button className="rounded-full bg-white p-2 border border-[#e0e6ed] shadow-sm">{settingsIcon}</button>
      </div>

      {/* SideBar componente real. Certifique-se de que ele tem seu próprio z-index e layout */}
      <div className="relative z-20">
        <SideBar />
      </div>

      {/* Ajuste principal: container flex-1 ocupa toda largura no mobile, padding lateral reduzido */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-6xl px-4 sm:px-8 py-8 mx-auto flex flex-col items-center justify-center">
          {/* Top Bar (Barra Superior) */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 w-full gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#8d53ff] to-[#5ddee6] bg-clip-text text-transparent mb-2 sm:mb-0">
              Atlas of Emotions
            </h1>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
              <div className="relative flex items-center w-full max-w-[90vw] sm:max-w-xs">
                <input
                  type="text"
                  placeholder="Search emotions/articles"
                  className="rounded-[16px] border border-[#e0e6ed] bg-white pl-10 pr-4 py-2 text-sm sm:text-base text-[#222] shadow-sm w-full focus:outline-none h-10"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">{searchIcon}</span>
              </div>
              <button className="ml-0 rounded-full w-10 h-10 flex items-center justify-center bg-transparent shadow-none border-none p-0" title="Cards" onClick={() => navigate('/atlas-emotion/Happy')}>
                <img src="/emotions/create-cta.png" alt="Create CTA" className="w-10 h-10 object-contain" />
              </button>
            </div>
          </div>

          {/* Seção 1: 'Things we do when we Compare' - Cartões com borda gradiente */}
          <div className="w-full text-[#222] font-bold text-base sm:text-lg mb-1 text-left">Things we do when we Compare</div>
          <div className="border-b border-[#e0e6ed] mb-4 sm:mb-6 w-full" style={{ borderWidth: '1px' }}></div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12 w-full">
            {grid1.map((emo, idx) => (
              <div key={idx} className="border-2 border-[#8d53ff] rounded-xl w-full min-w-0 bg-white">
                <div className="rounded-xl h-12 sm:h-16 w-full flex items-center justify-center font-bold text-base sm:text-xl select-none transition-all px-1 sm:px-2 text-[#8d53ff]">
                  {emo}
                </div>
              </div>
            ))}
          </div>

          {/* Seção 2: 'Things we do when we Compare' - Cartões com borda gradiente diferente */}
          <div className="w-full text-[#222] font-bold text-base sm:text-lg mb-1 text-left">Things we do when we Compare</div>
          <div className="border-b border-[#e0e6ed] mb-4 sm:mb-6 w-full" style={{ borderWidth: '1px' }}></div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full">
            {grid2.map((emo, idx) => (
              <div key={idx} className="border-2 border-[#1fb6ff] rounded-xl w-full min-w-0 bg-white">
                <div className="rounded-xl h-12 sm:h-16 w-full flex items-center justify-center font-bold text-base sm:text-xl select-none transition-all px-1 sm:px-2 text-[#1fb6ff]">
                  {emo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionsCards;