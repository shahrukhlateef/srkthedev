import React,{Component} from 'react';

class Product extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="border text-center p-5 mb-5">
                        <h3>Title 1</h3>
                        <p>Search for the keywords to learn more about each warning.</p>
                        <a href="" className="btn btn-success">Read More</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="border text-center p-5 mb-5">
                        <h3>Title 1</h3>
                        <p>Search for the keywords to learn more about each warning.</p>
                        <a href="" className="btn btn-success">Read More</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="border text-center p-5 mb-5">
                        <h3>Title 1</h3>
                        <p>Search for the keywords to learn more about each warning.</p>
                        <a href="" className="btn btn-success">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;