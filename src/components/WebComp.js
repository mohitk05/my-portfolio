import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

class WebComp extends Component {
  render() {
    return(

      <ReactCSSTransitionGroup
        component="div"
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppearTimeout={500}
        transitionAppear={true}
      >
        <div className="comp-title">
          <h2>Web Development<span style={{float:"right"}}>Projects</span></h2>

        </div>
      </ReactCSSTransitionGroup>

    );
  }
}

export default WebComp;
