import { Header } from './sessions/header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <main className="mx-auto max-w-5xl w-full flex">
        <Outlet />
      </main>
    </div>
  );
};
