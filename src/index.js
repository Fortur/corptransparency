import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router'
import {createBrowserHistory} from 'history'
import './css/index.css';
import {Provider} from 'react-redux';
import Store from './service/Store';
import Login from './component/Login'
import MainPage from './component/MainPage'
import AboutUsPage from './component/AboutUsPage'
import FAQ from './component/faq'

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <switch>
        <Route exact={true} path='/' component={MainPage}/>
        <Route path='/aboutUs' component={AboutUsPage} />
        <Route path='/login' component={Login}/>
        <Route path='/portfolio' component={MainPage}/>
        <Route path='/FAQ' component={FAQ}/>
      </switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
