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
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState('');
  const [showShortcuts, setShowShortcuts] = useState(false);

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

      {/* Imagem da Lulu sempre visível */}
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

        {/* Prompts - espaçamento revisado */}
        <div className="flex gap-6 justify-center flex-nowrap overflow-x-auto
                        max-[1366px]:flex-col max-[1366px]:items-center max-[1366px]:overflow-x-visible max-[1366px]:gap-3 max-[1366px]:w-full">
          {promptOptions.map((opt, i) => (
            <button
              key={i}
              className="bg-gradient-to-r from-[#7b8dfb] to-[#3ec6f2] text-white rounded-full px-8 py-3 text-base font-bold shadow-sm whitespace-nowrap h-12 flex items-center hover:from-[#3ec6f2] hover:to-[#7b8dfb]
                         max-[1366px]:w-full max-[1366px]:max-w-[600px]"
              onClick={() => handlePromptClick(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Sugestões sempre visíveis */}
        <div className="w-full flex flex-col items-center">
          <div id="suggestions-list" className="flex gap-4 mb-7 justify-center flex-nowrap overflow-x-auto
                          max-[1366px]:flex-col max-[1366px]:items-center max-[1366px]:overflow-x-visible max-[1366px]:w-full">
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="bg-[#f4f4f4] border border-[#e0e0e0] text-[#444] rounded-full px-8 py-3 text-base font-semibold shadow-sm whitespace-nowrap h-11 flex items-center hover:bg-[#e0e0e0] hover:border-[#bdbdbd]
                             max-[1366px]:w-full max-[1366px]:max-w-[600px]"
                onClick={() => handlePromptClick(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Input + Send */}
        <div className="w-full flex flex-row items-center mx-auto gap-2 justify-center
                        max-w-[320px] sm:max-w-[400px] md:max-w-[600px]">
          <input
            className="flex-1 h-10 rounded-full bg-white shadow-sm px-3 text-sm border-none outline-none min-w-0
                       sm:h-12 sm:px-6 sm:text-base"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={thinking}
          />
          <button
            onClick={handleSend}
            disabled={thinking}
            className="w-10 h-10 rounded-full bg-[#a18fff] flex items-center justify-center shadow-sm border-none hover:bg-[#9b6cff] disabled:opacity-60 disabled:cursor-not-allowed
                       sm:w-12 sm:h-12"
            title="Send"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 10L18 3L11 18L9 11L2 10Z" fill="white" />
            </svg>
          </button>
        </div>

        {/* Estado pensando com animação */}
        {thinking && (
          <div className="mt-4 text-[#7b8dfb] text-lg text-center animate-pulse flex flex-col items-center">
            <img src="/lulu_bot_novo.png" alt="Lulu thinking" className="w-20 h-auto mx-auto mb-2 animate-bounce" />
            <span>Lulu is thinking...</span>
          </div>
        )}

        <footer className="w-full text-center py-8 text-[#444] text-base bg-[#f8f8f8] mt-auto">
          We are an experimental start-up. Thank you for testing!
        </footer>
      </div>

      {/* Botões laterais de atalho */}
      <div className="fixed z-30 flex flex-col items-end right-2 bottom-[120px] sm:top-24 sm:right-8 sm:gap-8 sm:mt-[250px] sm:bottom-auto">
        {/* Toggle: só aparece em telas menores que sm */}
        <button
          onClick={() => setShowShortcuts((prev) => !prev)}
          className="mb-2 flex items-center justify-center w-12 h-12 rounded-full shadow-md transition-all duration-200 focus:outline-none bg-[#003344] hover:bg-[#002233] sm:hidden"
          title="Toggle shortcuts"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#7ed6f7"/>
          </svg>
        </button>
        {/* Atalhos: visíveis no desktop, toggle em telas pequenas */}
        <div className={`z-20 flex flex-col gap-4 ${showShortcuts ? '' : 'hidden'} sm:flex`}>
          {[
            { icon: 'target', gradient: 'from-[#5de6e6] to-[#7de2fc]' },
            { icon: 'bookmark', gradient: 'from-[#4f6cf6] to-[#5de6e6]' },
            { icon: 'memos', gradient: 'from-[#ffe259] to-[#ffa751]' },
            { icon: 'idea_box', gradient: 'from-[#8d53ff] to-[#5ddee6]' },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-12 h-12 sm:w-20 sm:h-20 rounded-2xl p-0 flex items-center justify-center bg-gradient-to-br ${item.gradient} border-none shadow-none transition-transform hover:scale-105`}
              title={`Shortcut: ${item.icon.replace('_', ' ')}`}
            >
              <img src={`/menu-icons/icon_${item.icon}.png`} alt={item.icon} className="w-7 h-7 sm:w-10 sm:h-10 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatLulu;
