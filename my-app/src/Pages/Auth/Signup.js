import React, { Component } from 'react';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname : "shahrukh khan",
            lname : "khan",
            email : "shahrukh@gmail.com",
            passw : "...",
            phone : "03451234567",
            message: "this is test message.."

        }
    }
    handelName = (e) => {
        this.setState({ fname : e.target.value })
        // console.log(e.target.value);
    }
    handellName = (e) => {
        this.setState({ lname : e.target.value })
    }
    handelEmail = (e) => {
        this.setState({ email : e.target.value })
    }
    handelPassw = (e) => {
        this.setState({passw : e.target.value})
    }
    handelPhone = (e) => {
        this.setState({ phone : e.target.value })
    }
    handelMessage = (e) => {
        this.setState({ message : e.target.value })
    }
    handelForm = (e) => {
        e.preventDefault();
        console.log(`
            My First Name is: ${this.state.fname}
            My Last name is: ${this.state.lname}
            My Email is: ${this.state.email}
            PassWord is: ${this.state.passw}
            My Number is: ${this.state.phone}
            My Message is: ${this.state.message}
            `);
        
    }
    render(){
        return(
            <>
                <div>
                    <h1>Sign Up</h1>
                    <p>this is Sign up page</p>
                    <form onSubmit={this.handelForm}>
                        <div>
                            <label>First Name:</label>
                            <input type="text" className="" value={this.state.fname} onChange={this.handelfName} placeholder="Frist Name" />
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text" className="" value={this.state.lname} onChange={this.handellName} placeholder="Last Name" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" className="" value={this.state.email} onChange={this.handelEmail} placeholder="Email" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="text" className="" value={this.state.passw} onChange={this.handelPassw} placeholder="Email" />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input type="text" className="" value={this.state.phone} onChange={this.handelPhone} placeholder="Phone" />
                        </div>
                        <div>
                            <label>Message:</label>
                            <input type="message" className="" value={this.state.message} onChange={this.handelMessage} placeholder="Message" />
                        </div>
                        <div>
                            <input type="submit" value="submit" className="" />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

// const Signup = () => {
    
// }

export default Signup;