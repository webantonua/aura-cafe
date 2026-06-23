import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-5 py-10">
        <h2 className="text-h1 font-bold w-full max-w-100">
          Кава, випічка і спокійний ранок у центрі міста
        </h2>
        <p className="text-text-small w-full max-w-100">
          AURO - вигадана кав'ярня для демо-проєкту: авторська кава свіжа
          випічка та затишна атмосфера
        </p>
        <div className="flex flex-row gap-5 mt-2">
          <button className="flex items-center gap-2 py-3 px-5 bg-yellow hover:bg-light-yellow rounded-lg transition-colors text-acc-black self-center cursor-pointer">
            <svg className="w-3 h-3" fill="currentColor">
              <use href="#icon-cafe"></use>
            </svg>
            <span className="text-text font-medium">Переглянути меню</span>
          </button>
          <button className="flex items-center gap-2 py-3 px-5 border border-border hover:bg-border hover:border-transparent rounded-lg transition-colors text-acc-black self-center cursor-pointer">
            <svg className="w-3 h-3" fill="currentColor">
              <use href="#icon-cafe"></use>
            </svg>
            <span className="text-text font-normal">Як нас знайти</span>
          </button>
        </div>
        <div>
            <img src="#" alt="tee" className="" />
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
