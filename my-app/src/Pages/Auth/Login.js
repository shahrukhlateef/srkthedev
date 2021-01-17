import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import {Link} from 'react-router-dom';

class Login extends Component {
    
    render(){
        return (
            <>
                <div className="">
                    <h1>Login Form</h1>
                    <form>
                    <div>
                        <label>User Name:</label>
                        <input type="text" className="" placeholder="User Name" />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="password" className="" placeholder="Password" />
                    </div>
                    <div>
                        <input type="submit" value="submit" className="" />
                    </div>
                    </form>
                    
                    
                    <Link to="/signup">Sign Up</Link> 
                </div>
            </>
        )
    }

}



// const Login = () => {
    
// }

export default Login;