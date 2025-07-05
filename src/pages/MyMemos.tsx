import React from 'react';
import SideBar from './SideBar';

const memos = [
  {
    text: (
      <>
        <span className="font-semibold">Challenge accepted! </span>
        <span className="text-[#444]">🕵️‍♂️ Okay, here's a cool language fact in 60 seconds: In Luxembourgish, you say <b>"Ech hun et gär"</b> to mean "I like it," but literally, it translates to "I have it gladly." <span className="inline-block">🇱🇺 Lëtzebuergesch feeling: You're not just saying it; you're feeling it! 🥰</span> Now, go impress someone with your new skill! 📝✨</span>
      </>
    ),
    date: 'June 6, 2025, 9:58 a.m.'
  },
  {
    text: (
      <>
        Criança em francês é <b>enfant</b>! 👶 Se precisar de mais palavras, é só chamar!
      </>
    ),
    date: 'May 25, 2025, 11:39 a.m.'
  },
  {
    text: (
      <>
        Absolutely! Here's our Lulu & You French Study Plan 📚: Vocabulary Jam: 5 new words a day (like science vocab!), Song Day: Learn a new song every week. Mini Conversations: Practice speaking with me—no pressure, just fun! French Snack Time: Watch a French video while enjoying something French (like croissants)! 🥐 Small steps = big wins! 🚀
      </>
    ),
    date: 'May 23, 2025, 4:08 a.m.'
  },
  {
    text: (
      <>
        Haha, no secret agent stuff here! 😁 I can't see your screen—I'm just a friendly bot here for insights, ideas, and good vibes.
      </>
    ),
    date: 'May 18, 2025, 6:07 a.m.'
  },
];

const tags = ['Tag', 'Tag', 'Tag'];

const MyMemos: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f5f6f7] sm:flex-row font-[Poppins] overflow-x-hidden">
      <SideBar />
      <div className="flex flex-1 flex-col w-full min-h-screen px-2 sm:px-20">
        {/* Título alinhado à esquerda */}
        <div className="mt-10 sm:mt-20 mb-2 ml-0 md:ml-2 flex items-start">
          <h1 className="bg-gradient-to-r from-[#8d53ff] to-[#5ddee6] bg-clip-text text-transparent text-5xl md:text-6xl font-bold text-left w-auto" style={{letterSpacing: '-1px'}}>My Memos</h1>
        </div>
        {/* Tags centralizadas na mesma direção das bordas dos cards */}
        <div className="mb-2 w-full flex justify-center">
          <div className="max-w-4xl w-full flex flex-row gap-4 justify-start mx-auto">
            {tags.map((tag, i) => (
              <span key={i} className="px-6 py-1 rounded-full border border-[#7b8dfb] text-[#222] font-semibold text-lg bg-white/0 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <main className="w-full flex flex-col items-center justify-start">
          <div className="flex flex-col gap-7 w-full max-w-4xl items-center px-2 md:px-0 mt-4">
            {memos.map((memo, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm px-8 py-6 text-[#222] text-base sm:text-lg font-normal w-full min-h-[60px] flex flex-col justify-between items-center">
                <div className="mb-2 leading-relaxed w-full text-center">{memo.text}</div>
                <div className="text-right text-xs text-gray-400 mt-2 w-full">{memo.date}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyMemos;
