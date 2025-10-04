export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkbg border-t border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p className="mb-2">
          Desenvolvido com <span className="text-red-500">❤️</span> para profissionais que valorizam organização e eficiência.
        </p>
        <p className="text-sm">&copy; {currentYear} AgendaMais. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
