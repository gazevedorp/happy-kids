import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLuluClick = () => {
    navigate('/chat-lulu');
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f5f6f7] sm:flex-row">
      <SideBar />

      <div className="absolute top-4 right-4 z-10 flex items-center gap-3 md:top-8 md:right-12">
        <span className="hidden font-semibold text-[#222] sm:block md:text-lg">
          Hi, Lulu
        </span>
        <img 
          src="/logo_happy_kids_2.png" 
          alt="Logo" 
          className="h-11 w-11 rounded-full border-2 border-[#a18fff] bg-white"
        />
      </div>
      
      <div className="flex flex-1 flex-col">
        
        <main className="flex flex-1 flex-col items-center justify-center gap-6 p-4 text-center">
          
          <h1 className="bg-gradient-to-r from-[#8d53ff] to-[#5ddee6] bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Moien, Lulu
          </h1>

          <p className="text-xl text-[#444] md:text-2xl">
            Choose your assistant today
          </p>

          <img 
            src="/lulu_bot.png" 
            alt="Lulu Bot" 
            className="h-auto w-56 cursor-pointer md:w-96"
            onClick={handleLuluClick}
          />
        
        </main>

        <footer className="w-full bg-[#f8f8f8] mb-8 py-3 px-2 text-center text-sm text-gray-500 md:text-base">
            We are an experimental start-up. Thank you for testing
        </footer>
      </div>

    </div>
  );
};

export default Home;
