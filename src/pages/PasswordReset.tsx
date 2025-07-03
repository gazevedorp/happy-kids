import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SpinnerIcon: React.FC = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const MailIcon: React.FC = () => (
  <svg
    className="mx-auto h-12 w-12 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log(`Email de redefinição enviado para: ${email}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-lg md:h-auto md:flex-row">
          <div className="flex w-full flex-col items-center justify-center space-y-6 p-8 md:w-1/2">
            <div className="w-full max-w-sm">
              <img src="/logo_happy_kids.png" alt="Logo da Happy Kids" className="mx-auto mb-6 h-20 w-auto md:mx-0" />


              {isSubmitted ? (
                <div className="space-y-4">
                  <MailIcon />
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Verifique seu e-mail
                  </h1>
                  <p className="text-gray-600">
                    Enviamos um link de redefinição de senha para{" "}
                    <span className="font-semibold text-gray-800">{email}</span>
                    .
                  </p>
                  <button
                    onClick={() => navigate("/")}
                    className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-lg font-bold text-white shadow-md transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Voltar para o Login
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Redefinir Senha
                  </h1>
                  <p className="mt-2 text-gray-600">
                    Digite seu e-mail abaixo e enviaremos um link para você
                    criar uma nova senha.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 w-full">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Endereço de e-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Endereço de e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-lg transition duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="mt-6 flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-lg font-bold text-white shadow-md transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isLoading && <SpinnerIcon />}
                      {isLoading ? "Enviando..." : "Redefinir Minha Senha"}
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                      }}
                    >
                      Voltar para o Login
                    </a>
                  </div>
                </>
              )}
            </div>
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

export default PasswordReset;
