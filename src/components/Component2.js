import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Component2 extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    }
  };

  componentWillMount(){
    this.setState({
      blogs: [
        {
          text: "WEB DEVELOPMENT",
          link: "/web-dev",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum faucibus sapien eu fringilla. Maecenas fringilla purus sit amet lorem viverra varius. Suspendisse consectetur lectus condimentum nulla laoreet, eu rhoncus felis pretium. Nullam lectus purus, efficitur vitae augue eget, condimentum egestas libero. Quisque eu massa mi. Morbi ut nisi ipsum. Nulla facilisi. Nulla ac feugiat orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet urna elit. Nulla lacinia enim et rhoncus cursus. Nulla est elit, cursus non massa vitae, pharetra malesuada arcu. Sed facilisis sapien eu sapien ultricies accumsan. Mauris vehicula nec nisi non scelerisque. In et dolor sagittis quam sodales condimentum. Curabitur ac nunc porta, cursus purus eget, porttitor tortor.",
          num: 'one',
          number: 'oneone'
        },
        {
          text: "GRAPHIC DESIGN",
          link: "/graphic-design",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum faucibus sapien eu fringilla. Maecenas fringilla purus sit amet lorem viverra varius. Suspendisse consectetur lectus condimentum nulla laoreet, eu rhoncus felis pretium. Nullam lectus purus, efficitur vitae augue eget, condimentum egestas libero. Quisque eu massa mi. Morbi ut nisi ipsum. Nulla facilisi. Nulla ac feugiat orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquet urna elit. Nulla lacinia enim et rhoncus cursus. Nulla est elit, cursus non massa vitae, pharetra malesuada arcu. Sed facilisis sapien eu sapien ultricies accumsan. Mauris vehicula nec nisi non scelerisque. In et dolor sagittis quam sodales condimentum. Curabitur ac nunc porta, cursus purus eget, porttitor tortor.",
          num: 'two',
          number: 'twotwo'
        },

      ]
    });
  }

  render() {

    let all_two = this.state.blogs.map((blog) => {
      return(

        <div key={blog.text} className={blog.num}>

        <Link to={blog.link}>
          <div style={{margin:15,bottom:0, position: 'absolute',zIndex: 2,}}>
            <h1 className="title">{blog.text}</h1>
            </div>
            </Link>
          <div className={blog.number} style={{position: 'relative'}}>
            <div className="inside">

            </div>
          </div>

        </div>

      );
    });
    return (
        <div className="main-body">
          {all_two}
        </div>
    );
  }
}

export default Component2;
