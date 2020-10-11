import React from 'react';

import SwitchRoutes from './routes';
import AuthStore from './contexts/stores/authStore';
import IsAuth from './middlewares/isAuth';

import Navbar, {
  PAGE_INCLUDING_NAVBAR,
} from './components/navbar/navbar';
import { AppWrapper } from './App.styled';

function App() {
  return (
    <AuthStore>
      <IsAuth>
        <AppWrapper
          isNavbar={PAGE_INCLUDING_NAVBAR.includes(
            window.location.pathname
          )}
        >
          <SwitchRoutes />
        </AppWrapper>
        <Navbar />
      </IsAuth>
    </AuthStore>
  );
}

export default App;
