import React from 'react'
import Image from "next/image";

export default function Fale() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-center lg:text-left py-8 px-4 max-w-6xl mx-auto">
        <div className="lg:w-2/3 text-[#333333] space-y-6">
          <hr className="border-t-2 border-[#333333] w-3/4 mx-auto lg:mx-0 my-4" />

          <h1 className="text-3xl font-bold"><strong>Fale Conosco!</strong></h1>
          <p className="text-lg leading-relaxed">
            Estamos sempre prontos para ouvir você! Se tiver dúvidas, sugestões ou críticas, não hesite em entrar em contato. Nossa equipe retornará 
            o mais breve possível.
          </p>

          <div className="flex items-center mb-6 space-x-4 justify-center lg:justify-start">
            <Image src="/img/icon_email.png" alt="icon_email" width={60} height={60} className="w-16 h-16" />
            <div>
              <h2 className="text-2xl font-bold"><strong>E-mail</strong></h2>
              <p className="text-lg">luminis.contato@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center mb-6 space-x-4 justify-center lg:justify-start">
            <Image src="/img/icon_tel.png" alt="icon_tel" width={60} height={60} className="w-16 h-16" />
            <div>
              <h2 className="text-2xl font-bold"><strong>Telefone</strong></h2>
              <p className="text-lg">(11) 9 9999-99999</p>
            </div>
          </div>

          <hr className="border-t-2 border-[#333333] w-3/4 mx-auto lg:mx-0 my-4" />
        </div>

        <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Image src="/img/img_fale_conosco.png" alt="img_fale" width={1000} height={1000} className="w-full lg:w-full h-auto" />
        </div>
      </section>

      <article className="text-center my-8">
        <h1 className="text-4xl mb-4"><strong>Tem alguma dúvida sobre a Luminis?</strong></h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto m-10">
          Já deu uma olhada nas Dúvidas Frequentes? Pode ser que a sua resposta já esteja por lá! Ainda quer falar com a gente? Entre em contato pelo e-mail ou contact-nos por telefone.
        </p>
      </article>
    </main>
  )
}
