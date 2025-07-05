import React, { useState } from 'react';
import SideBar from './SideBar';

const promptOptions = [
  'Practice with me small talk in Luxembourgish',
  'Tell me a secret about Luxembourg',
  'Help me develop superpowers',
];
const suggestions = [
  'Help me develop superpowers',
  'Help me develop superpowers',
  'Help me develop superpowers',
  'Help me develop superpowers',
];

const ChatLulu: React.FC = () => {
  const [showSuggestions] = useState(true);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState('');

  const handlePromptClick = (text: string) => {
    setInput(text);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setThinking(true);
    setTimeout(() => setThinking(false), 1800);
    setInput('');
  };

  return (
    <div className="relative min-h-screen bg-[#f4f4f4] flex flex-row items-stretch justify-start overflow-x-hidden font-[Poppins]">
      <SideBar />

      <img 
        src="/lulu_bot_novo.png" 
        alt="Lulu Bot"
        className="absolute top-20 left-[150px] w-[280px] h-auto z-10 scale-x-[-1]
                  max-[900px]:top-8 max-[900px]:left-20 max-[900px]:w-[120px]
                  max-[600px]:top-2 max-[600px]:left-16 max-[600px]:w-[80px]"
      />

      <div className="mx-auto mt-32 max-w-[900px] w-full flex flex-col items-center justify-start gap-6 mb-45
                      max-[900px]:mt-10 max-[900px]:gap-4">

        <h1 className="text-[3.2rem] font-bold tracking-[-1px] text-center bg-gradient-to-r from-[#a18fff] to-[#3ec6f2] bg-clip-text text-transparent mb-9 mt-36
                       max-[900px]:text-2xl max-[900px]:mt-10">
          <span>Hi,</span> Lulu
        </h1>

        {/* Prompts */}
        <div className="flex gap-4 mb-7 justify-center flex-nowrap overflow-x-auto
                        max-[900px]:flex-col max-[900px]:items-center max-[900px]:overflow-x-visible">
          {promptOptions.map((opt, i) => (
            <button
              key={i}
              className="bg-gradient-to-r from-[#7b8dfb] to-[#3ec6f2] text-white rounded-full px-8 py-3 text-base font-bold shadow-sm whitespace-nowrap h-12 flex items-center hover:from-[#3ec6f2] hover:to-[#7b8dfb]
                         max-[900px]:w-[90vw] max-[900px]:max-w-[400px] max-[900px]:mb-3"
              onClick={() => handlePromptClick(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div className="flex gap-4 mb-7 justify-center flex-nowrap overflow-x-auto
                          max-[900px]:flex-col max-[900px]:items-center max-[900px]:overflow-x-visible">
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="bg-[#f4f4f4] border border-[#e0e0e0] text-[#444] rounded-full px-8 py-3 text-base font-semibold shadow-sm whitespace-nowrap h-11 flex items-center hover:bg-[#e0e0e0] hover:border-[#bdbdbd]
                           max-[900px]:w-[90vw] max-[900px]:max-w-[400px] max-[900px]:mb-3"
                onClick={() => handlePromptClick(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input + Send */}
        <div className="w-full max-w-[700px] flex items-center mx-auto
                        max-[900px]:flex-col max-[900px]:w-[90vw] max-[900px]:max-w-[400px] max-[900px]:gap-2">
          <input
            className="flex-1 h-12 rounded-full bg-white shadow-sm px-6 text-base border-none outline-none w-full
                       max-[900px]:h-10 max-[900px]:px-4"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={thinking}
          />
          <button
            onClick={handleSend}
            disabled={thinking}
            className="w-12 h-12 rounded-full bg-[#a18fff] flex items-center justify-center shadow-sm border-none hover:bg-[#9b6cff] disabled:opacity-60 disabled:cursor-not-allowed
                       max-[900px]:w-10 max-[900px]:h-10"
            title="Send"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 10L18 3L11 18L9 11L2 10Z" fill="white" />
            </svg>
          </button>
        </div>

        {thinking && (
          <div className="mt-4 text-[#7b8dfb] text-lg text-center animate-pulse">
            <img src="/lulu_bot_novo.png" alt="Lulu thinking" className="w-20 h-auto mx-auto mb-2" />
            <span>Lulu is thinking...</span>
          </div>
        )}

        <footer className="w-full text-center py-8 text-[#444] text-base bg-[#f8f8f8] mt-auto">
          We are an experimental start-up. Thank you for testing!
        </footer>
      </div>

      <div className="fixed top-32 right-8 flex flex-col gap-8 z-20 mt-[250px]
                      max-[900px]:top-[420px] max-[900px]:right-2 max-[900px]:gap-4">
        {['target', 'bookmark', 'memos', 'idea_box'].map((icon, i) => (
          <button key={i} className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5de6e6] to-[#b58fff] flex items-center justify-center shadow-sm hover:shadow-lg transform hover:scale-105
                                     max-[900px]:w-12 max-[900px]:h-12">
            <img src={`/menu-icons/icon_${icon}.png`} alt={icon} className="w-9 h-9 max-[900px]:w-6 max-[900px]:h-6" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatLulu;
