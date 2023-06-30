import { ToastContainer } from 'react-toastify';
import GlobalStyled from './styles/globalStyled';

import Rotas from './routes/routes';
import AppProvider from './hooks/index';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Rotas />
      </AppProvider>
      <ToastContainer autoClose={2000} />
      <GlobalStyled />
    </div>
  );
}

export default App;
