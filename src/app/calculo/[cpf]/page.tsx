"use client"
import React, { useState } from 'react';


export default function Calculo() {
  const fatorEmissao = 0.092;
  const [consumo, setConsumo] = useState<number | string>('');
  const [emissao, setEmissao] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState<string>('');

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();

    const consumoNum = Number(consumo);

    if (isNaN(consumoNum) || consumoNum <= 0) {
      setMensagem('Por favor, insira um valor válido para o consumo.');
      setEmissao(null);
      return;
    }

    const emissaoCalculada = consumoNum * fatorEmissao;
    setEmissao(emissaoCalculada);

    if (emissaoCalculada > 100) {
      setMensagem(
        'Sua emissão de CO2 é alta. Considere reduzir o consumo de energia, utilizando fontes renováveis ou otimizando seus aparelhos.'
      );
    } else {
      setMensagem(
        'Sua emissão de CO2 está em um nível aceitável. Continue assim e explore maneiras de reduzir ainda mais!'
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Calculadora de Emissão de CO2</h1>
      <form
        onSubmit={handleCalcular}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <label htmlFor="consumo" className="block text-lg font-medium text-gray-700 mb-2">
          Consumo mensal de energia (kWh):
        </label>
        <input
          id="consumo"
          type="number"
          value={consumo}
          onChange={(e) => setConsumo(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Digite seu consumo em kWh"
          min="0"
          step="any"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
        >
          Calcular
        </button>
      </form>
      {emissao !== null && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Resultado:</h2>
          <p className="text-lg">
            Sua emissão de CO2 é de{' '}
            <span className="font-semibold text-green-700">
              {emissao.toFixed(2)} kg de CO2
            </span>{' '}
            por mês.
          </p>
          <p className="mt-4 text-gray-700">{mensagem}</p>
        </div>
      )}
    </div>
  );
}
