import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./component/Navbar"
import { Home } from './component/Home';
import { About } from './component/About';


function App() {
  return (
    <div className="App">
      <Navbar Style={"margin-left:20px"}></Navbar>
      <Routes>
        <Route path='/' element={<Home ></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
