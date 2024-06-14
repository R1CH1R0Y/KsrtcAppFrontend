import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/s' element={<Signup/>}/>
      <Route path='/a' element={<Add/>}/>
      <Route path='/sd' element={<Search/>}/>
      <Route path='/v' element={<View/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
