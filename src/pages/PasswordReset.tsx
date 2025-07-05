import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para envio de email de redefinição aqui
    console.log('Pedido de redefinição de senha enviado.');
  };

  return (
    <div className="flex h-screen overflow-hidden flex-col md:flex-row">

      {/* Painel Esquerdo */}
      <div className="relative flex w-full flex-col items-center justify-center bg-white p-6 md:w-[40%] md:p-8">

        {/* Logo no canto superior direito da coluna esquerda */}
        <div className="absolute top-6 right-6">
          <img 
            src="/logo_happy_kids.png" 
            alt="Logo da Happy Kids" 
            className="h-auto w-24 sm:w-28 md:w-40"
          />
        </div>

        <div className="w-full max-w-sm">
          <form onSubmit={handleReset} className="w-full">
            <div className="text-center md:text-left">
              <h1 className="mb-8 ml-2 text-5xl font-bold text-gray-800">
                Password Reset
              </h1>
              <p className="mb-6 ml-2 text-lg text-gray-600">
                Forgotten your password? Enter your email address below, and we'll send you an email allowing you to reset it.
              </p>
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="my-4 mr-10 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-lg"
            />

            <button
              type="submit"
              className="mt-4 h-[60px] w-full cursor-pointer rounded-full border-none bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-xl font-bold text-white transition-all hover:brightness-110 hover:from-[#d600b8] hover:to-[#1a1aff] hover:shadow-[0_4px_16px_rgba(51,51,255,0.18)]"
            >
              Reset My Password
            </button>
          </form>

          <p className="mt-8 ml-1 text-left text-lg text-gray-500">
            Please <a href="#" className="font-medium text-blue-600 hover:underline">contact us</a> if you have any trouble resetting your password.
          </p>
        </div>
      </div>

      {/* Painel Direito */}
      <div className="relative hidden bg-[#f5f6f7] md:flex md:w-[60%]">
        <img 
          src="/capa-luxemburgo.png" 
          alt="Capa de Luxemburgo" 
          className="h-full w-full object-cover" 
        />
      </div>
    </div>
  );
};

export default PasswordReset;
