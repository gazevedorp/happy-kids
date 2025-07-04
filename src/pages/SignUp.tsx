import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    navigate('/home');
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      
      {/* Painel Esquerdo: Melhoria no padding e alinhamento vertical */}
      <div className="flex w-full flex-col items-center justify-center bg-white p-6 md:w-[40%] md:py-8">
        
        {/* Wrapper do Formulário: Controla a largura máxima do conteúdo */}
        <div className="w-full max-w-sm">

          {/* Logo: Movido para o fluxo de conteúdo, centralizado */}
          <img src="/logo_happy_kids.png" alt="Logo da Happy Kids" className="mx-auto mb-8 h-auto w-40" />
          
          <form onSubmit={handleSignUp}>
            <h1 className="mb-2 text-left text-4xl font-bold text-gray-800 md:text-5xl">
              Sign Up
            </h1>

            <p className="mb-6 text-left text-lg text-gray-600">
              Already have an account? Then please{' '}
              <a
                href="#"
                className="cursor-pointer font-semibold text-[#7b3ff2] hover:underline"
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
              >
                sign in
              </a>.
            </p>
            
            {/* Inputs agora com w-full, respeitando o wrapper */}
            <input
              type="text"
              placeholder="Username"
              className="my-3 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-base"
            />
            <input
              type="email"
              placeholder="Email (opcional)"
              className="my-3 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-base"
            />
            <input
              type="password"
              placeholder="Password"
              className="my-3 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-base"
            />

            {/* Regras de Senha: Estilizadas para se encaixar no novo fluxo */}
            <ul className="my-3 list-disc space-y-1 pl-6 text-left text-sm text-[#444]">
              <li>Your password must contain at least 8 characters.</li>
              <li>Your password can't be entirely numeric.</li>
            </ul>

            <input
              type="password"
              placeholder="Password (again)"
              className="my-3 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-base"
            />
            
            {/* Botão com w-full */}
            <button
              type="submit"
              className="mt-6 h-[60px] w-full cursor-pointer rounded-full border-none bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-xl font-bold text-white transition-all hover:brightness-110 hover:from-[#d600b8] hover:to-[#1a1aff] hover:shadow-[0_4px_16px_rgba(51,51,255,0.18)]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Painel Direito: Ocupa 60% em desktop, escondido no mobile */}
      <div className="relative hidden bg-[#f5f6f7] md:flex md:w-[60%]">
        <img src="/capa-luxemburgo.png" alt="Capa de Luxemburgo" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default SignUp;