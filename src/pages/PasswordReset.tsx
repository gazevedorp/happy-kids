import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);
    const result = await resetPassword(email, newPassword);
    setLoading(false);
    if (result === 'not_found') {
      setError('No user found with this email.');
    } else if (result === 'invalid_password') {
      setError('Password must be at least 8 characters and not only numbers.');
    } else if (result === 'success') {
      setMessage('Password reset successfully! Redirecting to login...');
      setTimeout(() => navigate('/'), 2000);
    }
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
                Forgotten your password? Enter your email address and a new password below to reset it.
              </p>
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="my-2 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-lg"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New password"
              className="my-2 w-full rounded-full border-none bg-[#f0f0f0] p-4 text-lg"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
            />

            {error && <div className="mt-2 text-red-600 text-center">{error}</div>}
            {message && <div className="mt-2 text-green-600 text-center">{message}</div>}

            <button
              type="submit"
              className="mt-4 h-[60px] w-full cursor-pointer rounded-full border-none bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-xl font-bold text-white transition-all hover:brightness-110 hover:from-[#d600b8] hover:to-[#1a1aff] hover:shadow-[0_4px_16px_rgba(51,51,255,0.18)] disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Resetting...' : 'Reset My Password'}
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
