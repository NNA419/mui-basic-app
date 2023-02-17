import React from 'react';
import { Outlet } from 'react-router-dom';
import { MyApp } from '../App';
import MainHeader from './MainHeader';

function MainLayout() {
  return (
    <>
      <MainHeader />
      <MyApp />
      <Outlet />
    </>
  )
}

export default MainLayout