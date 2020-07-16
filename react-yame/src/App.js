import React from 'react';

import Layout from './hoc/Layout/Layout';


import Poster from './components/Products/NewPoster/Poster';
import Products from './components/Products/Products';
import BigPoster from './components/Products/BigPoster/BigPoster';
import ProductInfo from './components/ProductInfo/ProductInfo';

function App() {
  return (
    <Layout>
      <BigPoster link='https://cdn2.yame.vn/cimg/images/e55cc89a-1deb-0100-de9f-0016ff5a95b4.jpg'/>
      <Poster />
      <Products />
      <BigPoster link='https://cdn2.yame.vn/cimg/images/75ebdabd-9480-0100-3d82-0016ef081a94.jpg' />
      <Products />
      {/* <ProductInfo /> */}
    </Layout>
  );
}

export default App;
