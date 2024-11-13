import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#333333]">
      <nav className="flex flex-col lg:flex-row items-center justify-between px-8 py-4 max-w-6xl mx-auto space-y-4 lg:space-y-0">        
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/img/logo_luminus.png" alt="Logo Luminus" width={150} height={40} className="w-32 h-auto" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center text-white space-y-4 lg:space-y-0 lg:space-x-6">
          <Link href="/" className="hover:text-[#83FF62] transition">Home</Link>
          <Link href="/sobre" className="hover:text-[#83FF62] transition">Quem somos</Link>
          <Link href="/fale" className="hover:text-[#83FF62] transition">Fale conosco</Link>
          <Link href="/faq" className="hover:text-[#83FF62] transition">FAQ</Link>
          <Link href="/login" className="bg-[#83FF62] text-black px-4 py-2 rounded-md hover:bg-green-600 transition">
            Iniciar Sessão
          </Link>
        </div>
      </nav>
    </header>
  );
}
