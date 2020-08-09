import React, { Suspense, lazy} from 'react';
// import {useDispatch} from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// import * as actions from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';

const Home = lazy(() => import('./containers/Home/Home'));
const Search = lazy(() => import('./containers/Search/Search'));
const AddProduct = lazy(() => import('./components/AddNewProduct/AddProduct/AddProduct'));
const AddPoster = lazy(() => import('./components/AddNewProduct/AddPoster/AddPoster'));
const ProductInfo = lazy(() => import('./containers/ProductInfo/productInfo'));
const Checkout = lazy(() => import('./containers/Checkout/Checkout'));

const App = props =>{

  // const dispatch = useDispatch();
  //   const onGetCheckout = useCallback(() => dispatch(actions.getCheckout()), [dispatch]);

  //   useEffect(() => {
  //     onGetCheckout()
  //   }, [onGetCheckout])


  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/search' render={props => <Search {...props}/>} />
          <Route path='/product/:id' render={props => <ProductInfo {...props}/>} />
          <Route path='/addProduct' render={props => <AddProduct {...props}/>} />
          <Route path='/addPoster' render={props => <AddPoster {...props}/>} />
          <Route path='/checkout' render={props => <Checkout {...props}/>} />

          <Route path='/' exact render={props => <Home {...props}/>} />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default withRouter(App);
