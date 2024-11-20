"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, FormEvent } from 'react';

export default function Cadastro() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(event.currentTarget);
    const usuarioData = {
      nome: formData.get('nome') as string,
      senha: formData.get('senha') as string,
      email: formData.get('email') as string,
    };

    console.log('Dados do usuário:', usuarioData);

    try {
      const response = await fetch('/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro na API: ${errorData.error || response.statusText}`);
      }

      const data = await response.json();
      setSuccess(true);
      console.log('Usuário cadastrado com sucesso:', data);
      router.push('/login');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Erro ao cadastrar: ${err.message}`);
      } else {
        setError('Erro desconhecido.');
      }
      console.error('Erro no cadastro:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        id="form-cadastro"
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Cadastro</h1>

        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="senha" className="block text-gray-700 font-semibold mb-2">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#83FF62] text-gray-800 font-semibold py-2 rounded-lg hover:bg-green-400 transition duration-200"
          disabled={loading}
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mt-4 text-center">Usuário cadastrado com sucesso!</p>}

        <Link className="justify-center block mt-4 text-center no-underline" href="/login">
          Já possui uma conta? <span className="text-[#0874f8]">Login</span>
        </Link>
      </form>
    </div>
  );
}
