import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullname: "Your Name",
            email: "Your Email",
            phone: "Your Number",
            message: "Your Message"

        }
    }

// handlename = (event) => {
//     // console.log(event.target.value);
//     this.setState ({ fullname: event.target.value })
// }
// handleemail = (event) => {
//     // console.log(event.target.value);
//     this.setState ({ email: event.target.value })
// }

// handelphone = (event) => {
//     this.setState ({ phone : event.target.value })
// }
// handlemsg = (event) => {
//     this.setState ({ message: event.target.value })
// }
handleall = (e) => {
    this.setState ({ [e.target.name] : e.target.value })
}
handelsubmit = (e) => {
    e.preventDefault();
    // alert(`
    //     Name is ${this.state.fullname}
    //     Email is ${this.state.email}
    //     Phone is ${this.state.phone}
    //     Message is ${this.state.message}
    //     `);

    // alert(JSON.stringify(this.state));
}
     
    render(){
        return(
            <div className="forms row mb-5">
                    <form className="col-sm-6" onSubmit={this.handelsubmit}> 
                        <label>Full Name:</label>
<input className="form-control" type="text" name="fullname" onChange={this.handleall} placeholder={this.state.fullname} />
                        <br/>
                        <label>Email</label>
<input className="form-control" type="email" name="email" onChange={this.handleall} placeholder={this.state.email} />
                        <br/>
                        <label>Phone</label>
<input className="form-control" type="number" name="phone" onChange={this.handleall} placeholder={this.state.phone} />
                        <br/>
                        <label>Message</label>
<textarea className="form-control" name="message" onChange={this.handleall} placeholder={this.state.message}></textarea>
                        <br/>
                        <input type="submit" value="Send" className="btn btn-success" />
                    </form>
            </div>
        )
    }
}

export default Form;