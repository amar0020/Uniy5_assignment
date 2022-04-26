import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { EmployeeList } from "./component/EmployeeList";
// import { EmployeeDetails } from "./component/EmployeeDetails";
import { Admin } from "./component/Admin";
// import { ProtectedRoute } from "./component/PrivateRoute";
import { Navbar } from "./component/Navbar";
import { Logout } from "./component/Logout";

import { Routes, Route} from "react-router-dom"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/employee' element={<EmployeeList />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
