import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#333333]">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/img/logo_luminus.png" alt="Logo Luminus" width={150} height={40} className="w-32 h-auto" />
          </Link>
        </div>       
        <div>
          <ul className="flex space-x-6 text-white">
          <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Quem somos</Link>
            </li>
            <li>
              <Link href="/">Fale conosco</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Iniciar Sessão</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
