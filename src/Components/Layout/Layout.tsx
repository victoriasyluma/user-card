import React, { useState, useEffect } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header className="">
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
