import React from 'react';

import SwitchRoutes from './routes';
import AuthStore from './contexts/stores/authStore';
import IsAuth from './middlewares/isAuth';

import Navbar from './components/navbar/navbar';
import { AppWrapper } from './App.styled';

function App() {
  return (
    <AuthStore>
      <IsAuth>
        <AppWrapper>
          <SwitchRoutes />
        </AppWrapper>
        <Navbar />
      </IsAuth>
    </AuthStore>
  );
}

export default App;
