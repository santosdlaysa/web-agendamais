import { CalendarCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CalendarCheck className="text-primary w-8 h-8" />
          <h1 className="text-2xl font-bold text-darkbg">
            Agenda<span className="text-primary">Mais</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#visao-geral" className="text-gray-600 hover:text-primary transition py-2">
            Visão Geral
          </a>
          <a href="#funcionalidades" className="text-gray-600 hover:text-primary transition py-2">
            Funcionalidades
          </a>
          <a href="#contato" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-800 transition shadow-md">
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
