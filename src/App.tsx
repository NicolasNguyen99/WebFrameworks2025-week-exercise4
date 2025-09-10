import React from "react";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";
import { Link, Route, Routes } from 'react-router';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start' }}>
      {/* Replace anchor elements with router Link */}
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {/* Add react router routes here. See Router documentation how to define dynamic route segments:
          https://reactrouter.com/start/declaraticlearve/routing#dynamic-segments

          The idea is to have access to the product details with routes such as /products/1, /products/2, etc.where
          the last segment is the product id. 
          The id can then be used to fetch the product details in the ProductDetailsView component.
      */}
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>

    </div>
  );
};

export default App;
