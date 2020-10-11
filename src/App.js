import React from 'react';

import SwitchRoutes from './routes';
import AuthStore from './contexts/stores/authStore';
import IsAuth from './middlewares/isAuth';

import { AppWrapper } from './App.styled';

function App() {
  return (
    <AuthStore>
      <IsAuth>
        <AppWrapper>
          <SwitchRoutes />
        </AppWrapper>
      </IsAuth>
    </AuthStore>
  );
}

export default App;
