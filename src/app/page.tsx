import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center py-0 bg-[#f0f0f0]">
      <div className="w-full flex justify-end mt-0 mb-0">
        <Image src="/img/img_verde_sup.png" alt="img_superior_verde" width={700} height={700} className="w-[700px] h-auto" />
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
        <Image src="/img/img_verde_inf.png" alt="img_inferior_verde" width={700} height={700} className="w-[700px] h-auto" />
      </div>
    </section>
  );
}
