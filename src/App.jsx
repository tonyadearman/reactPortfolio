import React from 'react';
import Intro from './components/intro/Intro';
import About from './components/about/About';
// import Product from './components/product/Product'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact';



const App = () => {

  return (
    <div>

      <Intro />
    
      <About />
      {/* <Product /> */}
      <ProductList />
      <Contact />

    </div>
  );
};

export default App;