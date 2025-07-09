import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validações
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      setError('Por favor, preencha todos os campos obrigatórios');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres');
      setIsLoading(false);
      return;
    }

    if (/^\d+$/.test(formData.password)) {
      setError('A senha não pode ser totalmente numérica');
      setIsLoading(false);
      return;
    }

    try {
      const success = await signup(formData.username, formData.email, formData.password);
      if (success) {
    navigate('/home');
      } else {
        setError('Nome de usuário já existe');
      }
    } catch (error) {
      setError('Erro ao criar conta. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden flex-col md:flex-row">
      
      {/* Painel Esquerdo */}
      <div className="relative flex w-full flex-col items-center justify-center bg-white p-6 md:w-[40%] md:py-8">
        
        {/* Logo no canto superior direito da coluna esquerda */}
        <div className="absolute top-6 right-6">
          <img 
            src="/logo_happy_kids.png" 
            alt="Logo da Happy Kids" 
            className="h-auto w-24 sm:w-28 md:w-40"
          />
        </div>

        <div className="w-full max-w-sm">
          
          <form onSubmit={handleSignUp}>
            <h1 className="mb-8 text-left text-4xl font-bold text-gray-800 md:text-5xl">
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

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="my-3 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleInputChange}
              className="my-3 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-base"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="my-3 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-base"
            />

            <ul className="my-3 list-disc space-y-1 pl-6 text-left font-size: 0.885rem line-height: 1.27rem  text-[#444]">
              <li>Your password must contain at least 8 characters.</li>
              <li>Your password can't be entirely numeric.</li>
            </ul>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Password (again)"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="my-3 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-base"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 h-[60px] w-full cursor-pointer rounded-full border-none bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-xl font-bold text-white transition-all hover:brightness-110 hover:from-[#d600b8] hover:to-[#1a1aff] hover:shadow-[0_4px_16px_rgba(51,51,255,0.18)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Criando conta...' : 'Sign Up'}
            </button>
          </form>
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

export default SignUp;
