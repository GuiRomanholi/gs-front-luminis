import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center text-center py-0 bg-[#f0f0f0]">
        <div className="w-full flex justify-end mt-0 mb-0">
          <Image src="/img/img_verde_sup.png" alt="img_superior_verde" width={700} height={700} className="w-[600px] h-auto" />
        </div>

        <div className="max-w-4xl px-4 mt-0 mb-0">
          <h1 className="text-5xl font-bold text-[#333333] mb-2">
            <strong>Reduza</strong> suas emissões, economize
          </h1>
          <h1 className="text-5xl font-bold text-[#333333] mb-2">
            energia, faça a <strong>diferença!</strong>
          </h1>
          <p className="text-2xl text-[#555555] mb-4">
            Descubra suas <strong>emissões de CO₂</strong> com base no <strong>consumo de energia</strong> e receba sugestões para <strong>reduzir sua pegada de carbono.</strong> Pequenas mudanças podem fazer uma <strong>grande diferença</strong> para o <strong>meio ambiente!</strong>
          </p>
          <Link href="/" className="bg-[#83FF62] text-black px-6 py-2 rounded-md mt-10 hover:bg-green-600 transition">Começar</Link>
        </div>

        <div className="w-full flex justify-start mt-0 mb-0">
          <Image src="/img/img_verde_inf.png" alt="img_inferior_verde" width={700} height={700} className="w-[600px] h-auto" />
        </div>
      </section>

      <section className="bg-[#333333] text-white py-12">
        <div className="max-w-full mx-auto flex items-center justify-between px-4">
          <div className="w-2/3 pr-8 ml-24">
            <h1 className="text-5xl font-bold mb-4">
              O que a <span className="text-[#83FF62]">Luminis</span> faz:
            </h1>
            <p className="text-xl leading-relaxed mt-10">
              A Luminis é um Visualizador de Emissões de CO₂, uma solução prática e educativa que contribui para uma sociedade mais consciente e econômica, proporcionando ao usuário a oportunidade de reduzir suas emissões e seus gastos com energia. Essa ferramenta une sustentabilidade e economia, promovendo um estilo de vida que é bom para o bolso e para o planeta.
            </p>
          </div>
          
          <div className="w-1/3 flex justify-end">
            <div className="w-full max-w-none">
              <Image src="/img/img_lampada.png" alt="img_lampada" width={1000} height={1000} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>Com a <strong>Luminis</strong> você conseguirá: </h1>
        </div>
        <div>
          <ul>
            <li>
              <strong>Conscientização Ambiental:</strong> Entenda o impacto do seu consumo 
              de energia no meio ambiente.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
