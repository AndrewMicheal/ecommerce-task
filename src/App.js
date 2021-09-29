import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Advertising from './Components/Advertising Component/Advertising.jsx';
import Allproducts from './Components/All Products/Allproducts.jsx';
import Category from './Components/Category/Category.jsx';
import Filter from './Components/Filter Component/Filter.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Searchresults from './Components/Search component/Searchresults.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home/>
        <Searchresults/>
        <div className = "mt-5  container">
          <div className = "row">
            <div className = "col-lg-4 paddingLeft">
                <Route path = "" exact component = {Filter} />
            </div>
            <div className = "col-lg-8 paddingLeft paddingRight">
              <Advertising/>
              <Switch>
                <Route  path = "/home" exact  component = {Allproducts} />
                <Route path = "/category/:name" component = {Category} />
                <Redirect from = "/" to = "/home"/>
              </Switch>
            </div>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}


export default App;