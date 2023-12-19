import './App.css';
import Login from './login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './signIn.js';
import Home from './Home.js';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signIn' element={<SignIn />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
      </BrowserRouter>
    )
}

export default App;
