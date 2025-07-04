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
      
      <div className="flex w-full flex-col items-center justify-center bg-white p-6 md:w-[40%] md:p-8">
        
        <div className="w-full max-w-sm">

          <img src="/logo_happy_kids.png" alt="Logo da Happy Kids" className="mx-auto mb-8 h-auto w-40" />
          
          <form onSubmit={handleEnter}>
            <h1 className="mb-2 text-left text-4xl font-bold md:text-5xl">
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

            <button
              type="submit"
              className="mt-6 h-[60px] w-full cursor-pointer rounded-full border-none bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-xl font-bold text-white transition-all hover:brightness-110 hover:from-[#d600b8] hover:to-[#1a1aff] hover:shadow-[0_4px_16px_rgba(51,51,255,0.18)]"
            >
              Enter
            </button>

            <p className="mt-6 w-full text-right">
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

      <div className="relative hidden md:block md:w-[60%]">
        <img src="/capa-luxemburgo.png" alt="Capa de Luxemburgo" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Login;