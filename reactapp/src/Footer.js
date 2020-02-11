import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <footer className="bg-secondary text-white p-3 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            &copy; 2020 srkthedev. All Right Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;