import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div className="container">
                <ul className="row align-items-center justify-content-between">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>
                  <li>
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
            </div>
        )
    }
}

export default Nav;