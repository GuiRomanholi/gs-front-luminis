import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center text-center py-0 bg-[#f0f0f0]">
        
        <div className="w-full flex justify-end mt-0 mb-0">
          <Image
            src="/img/img_verde_sup.png"
            alt="img_superior_verde"
            width={700}
            height={700}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
          />
        </div>

        <div className="max-w-4xl px-4 mt-0 mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-[#333333] mb-2">
            <strong>Reduza</strong> suas emissões, economize
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-[#333333] mb-2">
            energia, faça a <strong>diferença!</strong>
          </h1>
          <p className="text-lg md:text-2xl text-[#555555] mb-4">
            Descubra suas <strong>emissões de CO₂</strong> com base no <strong>consumo de energia</strong> e receba sugestões para <strong>reduzir sua pegada de carbono.</strong> Pequenas mudanças podem fazer uma <strong>grande diferença</strong> para o <strong>meio ambiente!</strong>
          </p>
          <Link href="/login" className="bg-[#83FF62] text-black px-6 py-2 rounded-md mt-4 md:mt-10 hover:bg-green-600 transition">Começar</Link>
        </div>

        <div className="w-full flex justify-start mt-0 mb-0">
          <Image
            src="/img/img_verde_inf.png"
            alt="img_inferior_verde"
            width={700}
            height={700}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
          />
        </div>
      </section>

      <section className="bg-[#333333] text-white py-12">
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-4 items-center text-center lg:text-left">
          <div className="lg:w-2/3 lg:pr-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              O que a <span className="text-[#83FF62]">Luminis</span> faz:
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mt-4 lg:mt-10">
              A Luminis é um Visualizador de Emissões de CO₂, uma solução prática e educativa que contribui para uma sociedade mais consciente e econômica, proporcionando ao usuário a oportunidade de reduzir suas emissões e seus gastos com energia. Essa ferramenta une sustentabilidade e economia, promovendo um estilo de vida que é bom para o bolso e para o planeta.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
              <Image
                src="/img/img_lampada.png"
                alt="img_lampada"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-5xl font-bold text-center lg:text-left mb-8">
              Com a <strong>Luminis</strong> você conseguirá:
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ul className="text-lg md:text-xl text-[#333333] space-y-4">
                <li><strong>Conscientização Ambiental:</strong> Entenda o impacto do seu consumo de energia no meio ambiente.</li>
                <li><strong>Sugestões Práticas:</strong> Receba dicas de mudanças simples para diminuir sua pegada de carbono.</li>
              </ul>
              <ul className="text-lg md:text-xl text-[#333333] space-y-4">
                <li><strong>Economia de Energia:</strong> Identifique formas de reduzir o consumo e economizar nas contas.</li>
                <li><strong>Apoio à Sustentabilidade:</strong> Contribua para um futuro mais verde, fazendo escolhas conscientes.</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/img/img_planta.png"
              alt="img_planta"
              width={500}
              height={500}
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
