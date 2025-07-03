import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SpinnerIcon: React.FC = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        navigate('/home');
      } else {
        setError('Usuário ou senha inválidos. Tente "admin" e "password".');
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/password-reset');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <div className="flex min-h-screen items-center justify-center">
        
        <div className="flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-lg md:h-auto md:flex-row">

          <div className="flex w-full flex-col items-center justify-center space-y-6 p-8 md:w-1/2">
            <div className="w-full max-w-sm text-center md:text-left">
              <img src="/logo_happy_kids.png" alt="Logo da Happy Kids" className="mx-auto mb-6 h-20 w-auto md:mx-0" />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Acesse sua conta
              </h1>
              <p className="mt-2 text-gray-600">
                Não tem uma conta?{' '}
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  onClick={(e) => { e.preventDefault(); navigate('/signup'); }}
                >
                  Cadastre-se aqui
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-sm">
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="sr-only">Usuário</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-lg transition duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Senha</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-lg transition duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    required
                  />
                </div>
              </div>
              
              {error && (
                <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="mt-6 flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-lg font-bold text-white shadow-md transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading && <SpinnerIcon />}
                {isLoading ? 'Entrando...' : 'Entrar'}
              </button>

              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={handleForgotPassword}
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </form>
          </div>

          <div className="relative hidden w-1/2 items-center justify-center bg-gray-800 md:flex">
            <img 
              src="/capa-luxemburgo.png" 
              alt="Imagem decorativa de crianças brincando" 
              className="absolute h-full w-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;