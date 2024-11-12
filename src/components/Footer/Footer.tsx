import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
        <div>
            <ul>
                <li>
                    <Link href="/">
                        {<Image src="/img/logo_luminus.png" alt="Logo_footer" width={200} height={200}/>}
                    </Link>
                </li>
                <p>|</p>
                <li>
                    <a href="https://github.com/GuiRomanholi/gs-front-luminis" target="_blank">
                        {<Image src="/img/logo_github_branco.png" alt="Youtube_Branco" width={200} height={200}/>}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GuiRomanholi/gs-front-luminis" target="_blank">
                        {<Image src="/img/logo_github_branco.png" alt="Github_Branco" width={200} height={200}/>}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GuiRomanholi/gs-front-luminis" target="_blank">
                        {<Image src="/img/logo_github_branco.png" alt="Instagram_Branco" width={200} height={200}/>}
                    </a>
                </li>
            </ul>
        </div>
        <p>&copy; 2024 Luminis. Todos os direitos reservados</p>
    </footer>
  )
}
