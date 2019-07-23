import React, {Component} from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from './Components/Home';
import About from "./Components/About";
import House from "./Components/House"
import NotFound from "./Components/NotFound"
class App extends Component {
  state = {
    house: null,
    mainColor: "",
    secondaryColor: "",
  }
updateHouseInfo = (newState) => {
  this.setState(newState)
}
  render() {
  return (
    <HashRouter>
    <div className="App">
    <h1>Hogwarts School of wizardry</h1>
    <Switch>
    <Route exact path="/" component={()=> (
      <Home updateHouseInfo={this.updateHouseInfo}/>
    )}/>
    <Route path="/about" component={About}/>
    <Route path="/House/:name" component={()=> (
      <House mainColor={this.state.mainColor} secondaryColor= {this.state.secondaryColor}/>
    )}/>
    <Route component={NotFound}/>
    </Switch>
    </div>
    </HashRouter>
  );
  }
}

export default App;
