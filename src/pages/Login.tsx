import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Limpar erro quando o usuário digita
  };

  const handleEnter = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!formData.username || !formData.password) {
      setError('Por favor, preencha todos os campos');
      setIsLoading(false);
      return;
    }

    try {
      const success = await login(formData.username, formData.password);
      if (success) {
    navigate('/home');
      } else {
        setError('Usuário ou senha incorretos');
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgot = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/password-reset');
  };

  return (
    <div className="flex h-screen overflow-hidden flex-col xl:flex-row">

      {/* Painel Esquerdo */}
      <div className="flex w-full min-h-screen flex-col items-center justify-center bg-white p-6 xl:w-[40%] xl:p-8 relative transition-all duration-300 max-[1366px]:mx-auto max-[1366px]:w-full max-[1366px]:justify-center">

        {/* Logo no canto superior direito da coluna esquerda */}
        <div className="absolute top-6 right-6">
          <img 
            src="/logo_happy_kids.png" 
            alt="Logo da Happy Kids" 
            className="h-auto w-24 sm:w-28 md:w-40" 
          />
        </div>

        <div className="w-full max-w-sm">
          <form onSubmit={handleEnter}>
            <h1 className="mb-8 text-left text-4xl font-bold md:text-5xl">
              Login
            </h1>

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

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleInputChange}
              className="my-4 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-lg"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
              className="my-4 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-lg"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 h-[60px] w-full cursor-pointer rounded-full border-none bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-xl font-bold text-white transition-all hover:brightness-110 hover:from-[#d600b8] hover:to-[#1a1aff] hover:shadow-[0_4px_16px_rgba(51,51,255,0.18)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Entrando...' : 'Enter'}
            </button>

            <p className="mt-6 w-full text-right">
              <a
                href="#"
                className="text-lg font-medium text-gray-400 no-underline hover:text-gray-500"
                onClick={handleForgot}
              >
                Forgot password?
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Painel Direito */}
      <div className="relative login-right-panel xl:block xl:w-[60%] max-[1366px]:hidden">
        <img 
          src="/capa-luxemburgo.png" 
          alt="Capa de Luxemburgo" 
          className="h-full w-full object-cover" 
        />
      </div>
    </div>
  );
};

export default Login;
