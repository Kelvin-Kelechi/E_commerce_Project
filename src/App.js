import React from 'react'
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Contact from './pages/Contact';
import Favorite from './pages/Favorite';
 
import LogIn from './pages/LogIn';
import Signup from './pages/Signup';
 
 

function App() {
  return (
    <>
     
     <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/shop' element={<Shop /> } />
      <Route path='/shop-detail' element={<Detail /> } />
      <Route path='/cart' element={<Cart /> } />
      <Route path='/checkout' element={<CheckOut /> } />
      <Route path='/contact' element={<Contact /> } />
      <Route path='/favorite' element={<Favorite /> } />
      <Route path='/signup' element={< Signup /> } />
      <Route path='/login' element={<LogIn/> } />
     </Routes>
    </>
  );
}

export default App;
