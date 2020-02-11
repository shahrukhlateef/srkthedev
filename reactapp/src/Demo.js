import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


// Class Component
class Demo extends Component{
    render(){
        return (
            <div className="container">
                <h1>Hi {this.props.name}</h1>
                <p>Welocm</p>
            </div>
        );
        }
}





// Functional Component
// const Demo = ({name}) => {
//     return <h1>Hi {name}</h1>
// }
export default Demo;