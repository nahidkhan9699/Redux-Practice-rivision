import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Nav } from './A-Navigation/Nav';
import { Product } from './B-Product/Product';
import { Home } from './B-Product/Home';
import Cart from './B-Product/Cart';
const Landing = () => {
    return (
       <BrowserRouter>
       <Nav/>
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/product" element={<Product/>}/>
        <Route  path="/cart" element={<Cart/>}/>
       </Routes>
       </BrowserRouter> 
    );
};

export default Landing;