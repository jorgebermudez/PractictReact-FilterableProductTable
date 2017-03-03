import React from "react";
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Home from './routes/Home.js'
import Store from "./routes/Store.js"

import FilterableProductTable from './components/FilterableProductTable.js'

const app= document.getElementById('app');
ReactDom.render(
  <Router history={hashHistory} >
    <Route path="/" component={Home}/>
    <Route path="/store" component={Store}/>
  </Router>
  ,app);
