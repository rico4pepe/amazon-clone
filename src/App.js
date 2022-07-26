
import './App.css';
import Checkout from './components/Checkout'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Header />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Checkout" element={<Checkout />} />
    </Routes>
   
      
    </div>
    </BrowserRouter>

  );
}

export default App;
