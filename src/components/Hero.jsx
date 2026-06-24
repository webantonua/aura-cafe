import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white py-8 md:py-12 lg:py-16"
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* TEXT */}
        <div className="relative z-20 flex flex-col gap-5">
          <h2 className="text-h2 md:text-h1 font-bold w-full max-w-[520px] leading-tight">
            Кава, випічка і спокійний ранок у центрі міста
          </h2>

          <p className="text-text-small w-full max-w-[500px]">
            AURA — вигадана кав&apos;ярня для демо-проєкту: авторська кава,
            свіжа випічка та затишна атмосфера.
          </p>

          <div className="w-full flex flex-col md:flex-row md:gap-5 gap-2 mt-2 items-start">
            <a
              href="#menu"
              className="flex items-center gap-2 md:py-3 py-2 md:px-5 px-4 bg-yellow hover:bg-light-yellow rounded-lg transition-colors text-acc-black cursor-pointer active:bg-light-yellow"
            >
              <svg className="w-3 h-3 md:inline hidden" fill="currentColor">
                <use href="#icon-cafe"></use>
              </svg>
              <span className="text-text font-medium">Переглянути меню</span>
              <svg className="w-3 h-3 md:hidden inline" fill="currentColor">
                <use href="#icon-arrow-right"></use>
              </svg>
            </a>

            <a
              href="#contacts"
              className="flex md:flex-row flex-row-reverse items-center gap-2 md:py-3 py-2 md:px-5 px-4 border border-border hover:bg-border active:bg-border hover:border-transparent active:border-transparent rounded-lg transition-colors text-acc-black cursor-pointer"
            >
              <svg className="w-3 h-3" fill="currentColor">
                <use href="#icon-cafe"></use>
              </svg>
              <span className="text-text font-normal">Як нас знайти</span>
            </a>
          </div>
        </div>

        {/* VISUAL */}
        <div className="relative z-10 min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
          <img
            src="/images/hero/hero-coffee-croissant.png"
            alt="Кава та круасан"
            className="h-full w-full object-contain object-center my-auto"
          />

          {/* TOP CARD */}
          <div className="absolute right-2 top-2 md:right-8 md:top-6 bg-white shadow-[0_6px_50px_rgb(0,0,0,0.14)] rounded-2xl md:py-4 py-3 pl-4 pr-3 md:pl-6 md:pr-10 flex gap-4">
            <div className="bg-yellow rounded-full p-2 self-start md:mt-2">
              <svg className="w-5 h-5" fill="currentColor">
                <use href="#icon-cafe"></use>
              </svg>
            </div>

            <div className="flex flex-col">
              <h3 className="text-h4 leading-normal font-bold mb-1">
                Ранковий сет
              </h3>
              <p className="text-text-small">Капучино + круасан</p>
              <strong>180 грн</strong>
            </div>
          </div>

          {/* BOTTOM CARDS */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-3 md:bottom-8 md:left-8 md:right-8 md:justify-between">
            <div className="bg-white shadow-[0_12px_50px_rgb(0,0,0,0.1)] rounded-2xl md:py-4 py-3 md:pl-4 pl-3 md:pr-6 pr-4 flex md:gap-4 gap-2">
              <div className="bg-yellow rounded-full p-2 self-start md:mt-2">
                <svg className="w-5 h-5" fill="currentColor">
                  <use href="#icon-cafe"></use>
                </svg>
              </div>
              <div>
                <h2 className="text-h3 text-[16px] font-semibold">4.9</h2>
                <p className="text-text-small">демо</p>
              </div>
            </div>

            <div className="bg-white shadow-[0_12px_50px_rgb(0,0,0,0.1)] rounded-2xl md:py-4 py-3 md:pl-4 pl-3 md:pr-6 pr-4 flex md:gap-4 gap-2">
              <div className="bg-yellow rounded-full p-2 self-start md:mt-2">
                <svg className="w-5 h-5" fill="currentColor">
                  <use href="#icon-cafe"></use>
                </svg>
              </div>
              <div>
                <h2 className="text-h3 text-[16px] font-semibold">
                  08:00–21:00
                </h2>
                <p className="text-text-small">щодня</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;