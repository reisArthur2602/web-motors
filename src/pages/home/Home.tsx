import { Card, SearchBar } from './sessions';

export const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 justify-center items-center">
      <SearchBar />
      <h1 className="font-bold text-2xl">
        Carros novos e usados em todo o Brasil
      </h1>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
      </section>
    </div>
  );
};
