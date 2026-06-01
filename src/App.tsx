/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative font-sans text-charcoal bg-cream overflow-x-hidden w-full selection:bg-terracotta/20 selection:text-terra-dark noise-bg">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
