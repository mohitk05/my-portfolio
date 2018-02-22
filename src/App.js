import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Component2 from './components/Component2';
import Component1 from './components/Component1';
import WebComp from './components/WebComp';
import DesComp from './components/DesComp';
import ContComp from './components/ContComp';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Component1 />
            <Switch>
              <Route exact path={"/"} component={Component2} />
              <Route path={"/web-dev"} component={WebComp}/>
              <Route path={"/graphic-design"} component={DesComp}/>
              <Route path={"/contact"} component={ContComp}/>
              <Route component={NotFound}/>
            </Switch>
      <p className="footer">Copyright - Mohit Karekar</p>
      </div>
    );
  }
}

export default App;
