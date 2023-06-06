import Login from './Containers/Login/Login';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from './styles/globalStyled';
import { UserProvider } from './hooks/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Login />
      </UserProvider>
      <ToastContainer autoClose={2000} />
      <GlobalStyled />
    </div>
  );
}

export default App;
