import React from 'react'
import Image from "next/image";

export default function Sobre() {
  return (
    <main className="flex flex-col items-center">
      
      <section className="flex justify-center py-8">
        <Image src="/img/img_quem_somos.png" alt="img_quem" width={900} height={900} className="w-3/5 h-auto" />
      </section>
      
      <section className="bg-[#333333] text-white py-8 w-full flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Nosso Time</h1>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
          
          <div className="flex flex-col items-center w-48">
            <Image src="/img/foto_cristan.png" alt="img_cristian" width={150} height={150} className="rounded-full w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-4">Cristian Caja</h3>
            <p className="text-lg">RM: 558502</p>
            <p>
              <a href="https://github.com/cristianrcaja" target="_blank" className="text-green-400 hover:text-green-300">GitHub</a>
            </p>
          </div>

          <div className="flex flex-col items-center w-48">
            <Image src="/img/foto_guilherme.png" alt="img_gui" width={150} height={150} className="rounded-full w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-4 text-center">Guilherme Romanholi</h3>
            <p className="text-lg">RM: 557462</p>
            <p>
              <a href="https://github.com/GuiRomanholi" target="_blank" className="text-green-400 hover:text-green-300">GitHub</a>
            </p>
          </div>

          <div className="flex flex-col items-center w-48">
            <Image src="/img/foto_igor.png" alt="img_igor" width={150} height={150} className="rounded-full w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-4">Igor Werneck</h3>
            <p className="text-lg">RM: 558395</p>
            <p>
              <a href="https://github.com/IgorWJ" target="_blank" className="text-green-400 hover:text-green-300">GitHub</a>
            </p>
          </div>

        </div>
      </section>

      <article className="text-center max-w-3xl mx-auto py-8 px-4 space-y-4">
        <h2 className="text-4xl font-bold text-[#333333]">Quem Somos</h2>
        <p className="text-lg leading-relaxed text-[#333333]">
          Somos estudantes da turma 1TDSPM da FIAP e estamos desenvolvendo um projeto inovador 
          que utiliza tecnologia de ponta para ajudar usuários a monitorar suas emissões de CO₂ 
          com base no consumo de energia. Nossa aplicação simplifica o processo de calcular o 
          impacto ambiental e oferece sugestões práticas para reduzir emissões e economizar 
          energia. Com foco em conveniência, acessibilidade e sustentabilidade, nosso sistema 
          proporciona uma experiência completa e satisfatória para quem busca adotar 
          práticas mais conscientes e economizar nos custos de energia.
        </p>
        <a href="https://youtube.com" target="_blank" className="inline-block bg-[#83FF62] text-[#333333] font-semibold py-2 px-6 rounded-lg hover:bg-green-500 transition">
          Saiba Mais
        </a>
      </article>

    </main>
  )
}
