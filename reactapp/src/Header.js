import React, { Component } from 'react';

class Header extends Component{
    render(){
        return (
            <div className="header border">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-10">
                        <h1><a href="#">Company Logo</a></h1>
                    </div>
                    <div className="col-sm-2">
                        <a href="tel:923453016616">+923453016616</a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Header;