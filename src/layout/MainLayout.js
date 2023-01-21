import React from 'react';
import { Outlet } from 'react-router-dom';
import { MyApp } from '../App';
import AppBar from './MainHeader';

function MainLayout() {
  return (
    <>
      <AppBar />
      <MyApp />
      <Outlet />
    </>
  )
}

export default MainLayout