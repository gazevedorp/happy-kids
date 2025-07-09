import React from 'react';
import SideBar from './SideBar';

const messages = [
  {
    text: 'Help me develop superpowers',
    date: 'June 25, 2025, 8:12 p.m.',
    fromUser: true,
  },
  {
    text: `**Ooh, superpowers!** Okay, let’s start with **The Power of Languages.** 🎤✨\nSpeaking more languages makes you **super smart** and **cooler** in conversations.\nWant to level up your skills so it feels like a *superpower*? 🚀`,
    date: 'June 25, 2025, 8:12 p.m.',
    fromUser: false,
  },
  {
    text: 'super strenght',
    date: 'June 25, 2025, 8:12 p.m.',
    fromUser: true,
  },
  {
    text: `**Super strength?** 🤷‍♂️ I can’t give you *actual* muscles, but I **can** help you build **mental strength** for tough school stuff. How about that?`,
    date: 'June 25, 2025, 8:12 p.m.',
    fromUser: false,
  },
];

function renderMarkdown(text: string) {
  // Simples para negrito, itálico e emoji
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');
}

const ChatMemory: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f5f6f7] sm:flex-row font-[Poppins]">
      <SideBar />
      <div className="flex flex-1 flex-col w-full min-h-screen px-2 sm:px-0">
        <div className="mt-10 sm:mt-20 mb-8 ml-0 md:ml-2 flex items-start">
          <h1 className="bg-gradient-to-r from-[#8d53ff] to-[#5ddee6] bg-clip-text text-transparent text-4xl ml-20 md:text-5xl font-bold text-left w-auto" style={{letterSpacing: '-1px'}}>Chat Memory</h1>
        </div>
        <main className="w-full flex flex-col items-center justify-start overflow-x-hidden">
          <div className="flex flex-col gap-8 w-full max-w-3xl items-center px-2 md:px-0 mt-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-sm px-10 py-6 text-[#222] text-lg sm:text-xl font-normal w-full min-h-[70px] flex flex-col justify-between ${msg.fromUser ? 'items-end' : 'items-start'}`}
                style={{alignSelf: msg.fromUser ? 'flex-end' : 'flex-start'}}
              >
                <div
                  className={`mb-2 leading-relaxed w-full ${msg.fromUser ? 'text-right' : 'text-left'}`}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
                />
                <div className={`text-base text-gray-400 mt-1 ${msg.fromUser ? 'text-right' : 'text-left'}`}>{msg.date}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatMemory;
