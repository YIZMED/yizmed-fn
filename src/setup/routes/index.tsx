import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from '../../pages/Homepage';
import Testimonial from '../../pages/Homepage/testimonial/components';
import ThomeBanner from '../../pages/Homepage/testimonial/components/homeBanner';
import Categories from '../../pages/Homepage/categories';
import Blogs from '../../pages/Homepage/blogs/components';
import Footer from '../../pages/Footer/Components';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={<Testimonial />}
        />
        <Route path="/blog" element={<Blogs />} />
        <Route
          path="/product"
          element={<Categories />}
        />
        <Route
          path="/service"
          element={<ThomeBanner />}
        />
        <Route
          path="/contact"
          element={<Footer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
