import React from "react";
import {Route,Switch} from "react-router-dom"
import "./App.css";
import HomePageComponent from "./pages/homepage/homePageComponent"
import ShopPage from "./pages/homepage/shop/shop"
import Header from "./components/header/header"
import SignInSignUp from "./pages/homepage/SignInSignUp/SignInSignUp"
import {auth} from "./firebase/firebase.utility"


class App extends React.Component {
  constructor(){
    super()

    this.state={
      currentUser: null

    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

    render(){
      return (
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
        <Route exact path="/" component={HomePageComponent}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInSignUp}/>
        </Switch>
      </div>
      );
    }
  
  
  
};

export default App;
