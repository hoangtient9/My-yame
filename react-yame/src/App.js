import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

const Home = lazy(() => import('./containers/Home/Home'));
const Search = lazy(() => import('./containers/Search/Search'));
const AddProduct = lazy(() => import('./components/AddNewProduct/AddProduct/AddProduct'));
const AddPoster = lazy(() => import('./components/AddNewProduct/AddPoster/AddPoster'));

const App = props =>{

  return (
    <Layout>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path='/search' render={props => <Search {...props}/>} />
          <Route path='/addProduct' render={props => <AddProduct {...props}/>} />
          <Route path='/addPoster' render={props => <AddPoster {...props}/>} />
          <Route path='/' exact render={props => <Home {...props}/>} />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default withRouter(App);
