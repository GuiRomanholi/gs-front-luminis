import React from 'react';

export default function Cadastro() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Cadastro</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-gray-700 font-semibold mb-2">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#83FF62] text-gray-800 font-semibold py-2 rounded-lg hover:bg-green-400 transition duration-200"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
