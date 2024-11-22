import React from 'react'
import Image from "next/image";

export default function Faq() {
  return (
    <div className="flex flex-col items-center text-center py-8 px-4">
      <section className="mb-12">
        <Image src="/img/img_faq.png" alt="img_faq" width={150} height={150} className="w-96 h-auto" />
      </section>

      <article className="max-w-2xl text-[#333333] space-y-6">
        <h1 className="text-3xl font-bold">Como o Luminis calcula meu gasto energético?</h1>
        <p className="text-lg leading-relaxed">
          O sistema usa os dados de consumo de energia que você insere e aplica fatores de emissão reconhecidos para calcular a quantidade de CO₂ gerada. Assim, você visualiza sua pegada de carbono com base em seu uso real de eletricidade e combustíveis.
        </p>
        <hr className="border-t-2 border-[#333333] w-200 mx-auto my-4" />

        <h1 className="text-3xl font-bold">Que tipo de informações preciso inserir para obter o cálculo?</h1>
        <p className="text-lg leading-relaxed">
          Você precisará informar dados simples sobre seu consumo de energia, como o valor de eletricidade mensal e o uso de combustíveis, para que o sistema possa calcular com precisão suas emissões e sugerir mudanças.
        </p>
        <hr className="border-t-2 border-[#333333] w-200 mx-auto my-4" />

        <h1 className="text-3xl font-bold">Como o Visualizador ajuda a reduzir meus gastos com energia?</h1>
        <p className="text-lg leading-relaxed">
          Além de calcular suas emissões, o sistema fornece dicas práticas para otimizar o consumo e economizar. Essas sugestões incluem orientações sobre eficiência energética e pequenas mudanças que fazem diferença nas contas.
        </p>
        <hr className="border-t-2 border-[#333333] w-200 mx-auto my-4" />

        <h1 className="text-3xl font-bold">Minhas informações de consumo ficam armazenadas?</h1>
        <p className="text-lg leading-relaxed">
          Não. O Visualizador de Emissões de CO₂ não armazena suas informações pessoais ou de consumo; ele processa os dados apenas localmente para gerar os cálculos e sugestões.
        </p>
        <hr className="border-t-2 border-[#333333] w-200 mx-auto my-4" />

        <h1 className="text-3xl font-bold">Como as sugestões de economia podem me ajudar no dia a dia?</h1>
        <p className="text-lg leading-relaxed">
          As sugestões oferecidas pelo sistema são pensadas para serem práticas e fáceis de aplicar, como ajustes no uso de eletrônicos ou dicas de eficiência. Essas mudanças podem reduzir tanto suas emissões quanto os custos com energia, proporcionando uma economia contínua.
        </p>
      </article>
      
    </div>
  )
}
