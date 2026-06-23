import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-border py-4">
      <div className="w-20 h-10 flex items-center">
        <img src="#" alt="logo" className="w-full max-w-20" />
      </div>
      <nav className="md:inline hidden">
        <ul className="flex flex-row gap-10">
          <li className="">
            <a href="#" className="text-text font-medium hover:text-gray transition-all">
              Головна
            </a>
          </li>
          <li>
            <a href="#" className="text-text font-medium hover:text-gray transition-all">
              Меню
            </a>
          </li>
          <li>
            <a href="#" className="text-text font-medium hover:text-gray transition-all">
              Атмосфера
            </a>
          </li>
          <li>
            <a href="#" className="text-text font-medium hover:text-gray transition-all">
              Контакти
            </a>
          </li>
          <li>
            <a href="#" className="text-text font-medium hover:text-gray transition-all">
              Демо
            </a>
          </li>
        </ul>
      </nav>
      <button className="md:flex hidden items-center gap-2 py-2 px-5 bg-yellow hover:bg-light-yellow rounded-lg transition-colors text-acc-black self-center cursor-pointer">
        <svg className="w-3 h-3" fill="currentColor">
          <use href="#icon-calendar"></use>
        </svg>
        <span className="text-text font-medium">Забронювати</span>
      </button>
    </header>
  );
};

export default Header;
