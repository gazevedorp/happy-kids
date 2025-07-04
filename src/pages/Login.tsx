import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleEnter = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleForgot = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/password-reset');
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      
      {/* Painel Esquerdo: AJUSTADO para 40% de largura em desktop, igual aos outros */}
      <div className="flex w-full flex-col items-center justify-center bg-white p-6 md:w-[40%] md:p-8">
        
        <div className="w-full max-w-sm">

          <img src="/logo_happy_kids.png" alt="Logo da Happy Kids" className="mx-auto mb-8 h-auto w-40" />
          
          <form onSubmit={handleEnter}>
            {/* Título: AJUSTADO para o mesmo tamanho dos outros (4xl -> 5xl) */}
            <h1 className="mb-2 text-left text-4xl font-bold md:text-5xl">
              Login
            </h1>

            {/* Subtítulo: AJUSTADO para a mesma margem inferior (mb-6) */}
            <p className="mb-6 text-left text-lg text-gray-600">
              If you have not created an account yet, then please{' '}
              <a
                href="#"
                className="font-semibold text-blue-600 hover:underline"
                onClick={(e) => { e.preventDefault(); navigate('/signup'); }}
              >
                sign up
              </a>{' '}
              first.
            </p>
            
            {/* Inputs: AJUSTADO para remover o estilo de placeholder específico */}
            <input
              type="text"
              placeholder="username"
              className="my-4 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-lg"
            />
            <input
              type="password"
              placeholder="password"
              className="my-4 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-lg"
            />

            {/* Botão: AJUSTADO para o mesmo tamanho de fonte (text-xl) */}
            <button
              type="submit"
              className="mt-6 h-[60px] w-full cursor-pointer rounded-full border-none bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-xl font-bold text-white transition-all hover:brightness-110 hover:from-[#d600b8] hover:to-[#1a1aff] hover:shadow-[0_4px_16px_rgba(51,51,255,0.18)]"
            >
              Enter
            </button>

            <p className="mt-6 w-full text-right">
                {/* Link: AJUSTADO para o mesmo tamanho de fonte de ações secundárias (text-base) */}
                <a
                  href="#"
                  className="text-base font-medium text-gray-400 no-underline hover:text-gray-500"
                  onClick={handleForgot}
                >
                  Forgot password?
                </a>
            </p>
          </form>
        </div>
      </div>

      {/* Painel Direito: AJUSTADO para 60% de largura, igual aos outros */}
      <div className="relative hidden md:block md:w-[60%]">
        <img src="/capa-luxemburgo.png" alt="Capa de Luxemburgo" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Login;