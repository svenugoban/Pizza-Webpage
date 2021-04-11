import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './component/Hero';
import Products from './component/Products';
import { productData, productDataTwo } from './component/Products/data';
import Feature from './component/Feature';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Hero/>
    <Products heading='Choose Your Favorite' data={productData} />
    <Feature/>
    <Products heading='Sweet treats for you' data={productDataTwo} />
    <Footer/>
    </Router>
  );
}

export default App;
