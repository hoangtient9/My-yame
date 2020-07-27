import React from 'react';

import Layout from './hoc/Layout/Layout';



import ProductInfo from './components/ProductInfo/ProductInfo';
import Home from './containers/Home/Home';
import AddProduct from './components/AddNewProduct/AddProduct/AddProduct';
import AddPoster from './components/AddNewProduct/AddPoster/AddPoster';

function App() {
  return (
    <Layout>
      <Home />
      {/* <AddProduct /> */}
      {/* <AddPoster /> */}
      {/* <ProductInfo /> */}
    </Layout>
  );
}

export default App;
