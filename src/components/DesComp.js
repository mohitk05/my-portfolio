import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

class DesComp extends Component {
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
          <h2>Graphic Design<span style={{float:"right", textTransform:"uppercase"}}>Projects</span></h2>

        </div>
      </ReactCSSTransitionGroup>

    );
  }
}

export default DesComp;
