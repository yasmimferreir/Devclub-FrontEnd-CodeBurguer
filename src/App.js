import { ToastContainer } from 'react-toastify';
import GlobalStyled from './styles/globalStyled';
import { UserProvider } from './hooks/UserContext';
import Rotas from './routes/routes';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Rotas />
      </UserProvider>
      <ToastContainer autoClose={2000} />
      <GlobalStyled />
    </div>
  );
}

export default App;
