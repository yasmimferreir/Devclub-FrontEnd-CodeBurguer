import Login from './Containers/Login/Login';
//import Register from './Containers/Register/Register';

import { ToastContainer } from 'react-toastify';
import GlobalStyled from './styles/globalStyled';

function App() {
  return (
    <div className="App">
      <Login />
      <ToastContainer autoClose={2000} />
      <GlobalStyled />
    </div>
  );
}

export default App;
