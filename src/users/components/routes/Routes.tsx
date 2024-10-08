// App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Login } from '../login/Login';

const AppRoutes: React.FC = () => {
  return (

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  );
};

export default AppRoutes;
