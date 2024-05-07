import React, { useState } from 'react';
import ProductsList from './categories/ProductList';
import CartScreen from './categories/CartScreen';

const App = () => {
  const [route, setRoute] = useState('products'); // Default route is 'products'

  const navigateToCart = () => {
    setRoute('cart');
  };

  const navigateToProducts = () => {
    setRoute('products');
  };

  return (
    <div>
      {route === 'products' && <ProductsList navigateToCart={navigateToCart} />}
      {route === 'cart' && <CartScreen navigateToProducts={navigateToProducts} />}
    </div>
  );
};

export default App;
