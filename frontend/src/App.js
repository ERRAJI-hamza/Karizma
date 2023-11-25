import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from './auth/Login.js';
import { Register } from './auth/Register.js';
import { Home } from './component/Home.js';

function App() {
  return (
    <Routes>
           <Route path="/" element={<Login />} />  
           <Route path="/register" element={<Register />} />  
           <Route path="/Home" element={<Home />} />  
     </Routes>
  );
}

export default App;
