import { useEffect } from 'react';
import './App.css';
import AppNavBar from './components/pages/AppNavBar';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import { useDispatch,useSelector } from 'react-redux';
import { getAuthUser } from './redux/actions';
import AddProduct from './components/Product/AddProduct';
import Pasta from './components/Product/Pasta';
import Breads from './components/Product/Breads';
import Rice from './components/Product/Rice';
import Chocolat from './components/Product/Chocolat';
import Noodels from './components/Product/Noodels';
import Drink from './components/Product/Drink';
import { getProduct } from './redux/actionProducts';
import ShoppingCart from './components/Product/ShoppingCard';
function App() {
  const dispatch=useDispatch()
  const getAuth=()=>{
  dispatch(getAuthUser())
  }
 
  useEffect(getAuth,[])
  const isAuth=useSelector((state)=>state.auth.isAuth)

  return (
    <div className="App">
    <AppNavBar />
    
      <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Dashboard" element={<Dashboard/>} />
  <Route path="/AddProduct" element={<AddProduct/>} />
  <Route path="/Pasta" element={<Pasta />} />
  <Route path="/Breads" element={<Breads/>} />
  <Route path="/Noodels" element={<Noodels/>}/>
  <Route path="/Rice" element={<Rice/>} />
  <Route path="/Chocolat" element={<Chocolat/>} />
  <Route path="/Drink" element={<Drink/>} />
  <Route path="/ShoppingCart" element={<ShoppingCart/>} />
</Routes>
  


    </div>
  );
}

export default App;
