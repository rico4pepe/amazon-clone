
import './App.css';
import Checkout from './components/Checkout'
import Payment from './components/Payment'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import { useEffect } from 'react';
import { auth }  from './firebaseUtility/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './dataManagement/StateProvider'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const promise = loadStripe('pk_test_shOF3rI9LbnQaRoQBCSiUhYx');
function App() {

  const [{}, dispatch] = useStateValue(); 

  useEffect(() =>{
//Since no value is passes into the array then it will only run once when the app is loaded
onAuthStateChanged(auth, (user) => {
  if (user) {

    console.log("User is >>>>> ", user)
    
    dispatch({
      type: 'SET_USER',
      user: user
    })

   // const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    dispatch({
      type: 'SET_USER',
      user: null
    })

  }
});
  }, [])
  return (
    <BrowserRouter>
    <div className="app">
    <Header />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Checkout" element={<Checkout />} />
       <Route path="/payment" element={<Elements stripe={promise}><Payment />  </Elements>} />
    </Routes>
   
      
    </div>
    </BrowserRouter>

  );
}

export default App;
