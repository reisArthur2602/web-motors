import React from 'react';
import { Header } from './sessions/header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};
