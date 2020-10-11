import React from 'react';

import SwitchRoutes from './routes';
import AuthStore from './contexts/stores/authStore';

import { AppWrapper } from './App.styled';

function App() {
  return (
    <AuthStore>
      <AppWrapper>
        <SwitchRoutes />
      </AppWrapper>
    </AuthStore>
  );
}

export default App;
