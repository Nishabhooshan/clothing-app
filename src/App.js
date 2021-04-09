import React from "react";
import {Route,Switch} from "react-router-dom"
import "./App.css";
import HomePageComponent from "./pages/homepage/homePageComponent"
import ShopPage from "./pages/homepage/shop/shop"

function App() {
  return (
    <div>
      <Switch>
    <Route exact path="/" component={HomePageComponent}/>
    <Route path="/shop" component={ShopPage}/>
    </Switch>
  </div>
  );
};

export default App;
