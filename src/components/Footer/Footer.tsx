import Link from 'next/link';
import React from 'react';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-6">
      <div className="flex flex-col items-center space-y-4">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <Image src="/img/logo_luminus.png" alt="Logo_footer" width={80} height={80} className="w-20 h-auto" />
            </Link>
          </li>

          <p className="text-white text-2xl leading-none">|</p>

          <li>
            <a href="https://www.youtube.com/watch?v=trbFRtswIfM" target="_blank" rel="noopener noreferrer">
              <Image src="/img/icon_youtube.png" alt="Youtube_Branco" width={30} height={30} className="w-5 h-auto" />
            </a>
          </li>
          <li>
            <a href="https://github.com/GuiRomanholi/gs-front-luminis" target="_blank" rel="noopener noreferrer">
              <Image src="/img/icon_github.png" alt="Github_Branco" width={30} height={30} className="w-5 h-auto" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/luminis_of" target="_blank" rel="noopener noreferrer">
              <Image src="/img/icon_instagram.png" alt="Instagram_Branco" width={30} height={30} className="w-5 h-auto" />
            </a>
          </li>
        </ul>
        <p className="text-center text-sm mt-4">&copy; 2024 Luminis. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
