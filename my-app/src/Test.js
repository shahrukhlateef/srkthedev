import React, { Component } from 'react';
import ReactDom from 'react-dom';


// class Test extends Component {
//     render(){
//         return(
//             <div>
//                 <h1>Title {this.props.fname} {this.props.lname}</h1>
//                 <p>description...</p>
//             </div>
//         )
//     }
// }


const Test = ({name, fname, desc}) => {
    return(
        <div>
            <h1>My name is {name} and My father name is {fname}</h1>
            <p>{desc}</p>
        </div>
    )
}


export default Test;