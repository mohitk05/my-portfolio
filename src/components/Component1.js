import React, { Component } from 'react';
import {BrowserRouter, NavLink, Link} from 'react-router-dom';
import '../App.css';

class Component1 extends Component {

  constructor(props) {
    super();
    this.state = {
      me: 'a graphic designer.'
    }
  };

  change(i){
    if(i === 0)
      return 'a graphic designer.';
    if(i === 1)
      return 'a front-end developer.';
    if(i === 2)
      return 'a human.';
  };
i = 0;
  componentDidMount(){
    setInterval(function(){

        var x = this.change(this.i);
        this.setState({
          me: x,
        });
        (this.i)++;
        if(this.i===3){
          this.i = 0;
        }
    }.bind(this),2000);
  }

  render() {
    return (
      <div className="Component1">
          <div className="header">
              <p className="name menu"><Link to="/">Mohit Karekar</Link></p>
              <p className="dynamic menu">I am <span style={{color: 'red'}}>{this.state.me}</span></p>

          <div className="nav-menu">

            <ul className="nav">
              <li><NavLink exact activeClassName="active" to="/web-dev">WebDev</NavLink></li>
              <li><NavLink activeClassName="active" to="/graphic-design">Design</NavLink></li>
              <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
            </ul>

          </div>
        </div>
        </div>
    );
  }
}

export default Component1;
