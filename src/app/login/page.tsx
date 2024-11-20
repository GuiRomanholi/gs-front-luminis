"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [cpf, setCpf] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`/api/usuario/${cpf}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('CPF não encontrado ou erro ao acessar a API');
      }

      const cliente = await response.json();
      
      if (cliente.cpf != null) {
        setSuccess('Acesso liberado!');
        console.log('Cliente encontrado:', cliente);

        router.push(`/calculo/${cpf}`);
      } else {
        throw new Error('Cliente não encontrado');
      }
    } catch (err) {
      setError("Erro: " + (err instanceof Error ? err.message : 'Erro desconhecido'));
      console.error('Erro ao tentar acessar:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cpf" className="block text-gray-700 font-semibold mb-2">CPF</label>
            <input
              type="text"
              id="idCpf"
              name="txtCpf"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu CPF"
              required
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">Nome</label>
            <input
              type="text"
              id="idNome"
              name="txtNome"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu Nome"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#83FF62] text-gray-800 font-semibold py-2 rounded-lg hover:bg-green-400 transition duration-200"
          >
            Entrar
          </button>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          {success && <p className="text-green-500 text-center mt-2">{success}</p>}

          <Link className="lo-createAccountLink block text-center mt-4 text-blue-500 hover:underline" href="/cadastro">
            Criar uma conta
          </Link>
        </form>
      </div>
    </div>
  );
}
