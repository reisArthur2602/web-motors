import { Search } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className="max-w-3xl w-full p-4 rounded-lg bg-zinc-800 flex justify-center items-center gap-2 ">
      <input
        placeholder="Digite o nome do carro"
        className="px-2 h-9 rounded-lg bg-transparent border solid border-zinc-700 outline-none flex-1"
      />
      <button className="flex gap-2 h-9 px-6 items-center justify-center bg-blue-600 font-semibold rounded-lg ">
        <Search size={18} /> Buscar
      </button>
    </div>
  );
};
