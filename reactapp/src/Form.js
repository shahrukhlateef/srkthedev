import React, {Component} from 'react';

class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			fname : "shahrukh",
			femail : "shah@gmail.com"
			}
		
	}
	
	/*handelname = (e) => {
		this.setState ({ fname : e.target.value })
	}
	handelfemail = (e) => {
		this.setState ({ femail : e.target.value })
	}*/
	handelfield = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	} 
	handelsubmit = (e) => {
		e.preventDefault();
		/*alert(`My Name is: ${this.state.fname}`);*/
		alert(JSON.stringify(this.state))
	}
	render(){
		return(
			<div className="row">
			<div className="col-sm-6">
				<form onSubmit={this.handelsubmit}>
				<div className="form-group">
				<label>Name</label>
				<input type="text" name="fname" value={this.state.fname} onChange={this.handelfield} placeholder="Fname" className="form-control" />
				</div>
				<div className="form-group">
				<label>Email</label>
				<input type="email" name="femail" value={this.state.femail} onChange={this.handelfield} placeholder="Fname" className="form-control" />
				</div>
				<div className="form-group">
				<input type="submit" value="Send" className="btn btn-success"/>
				</div>
				</form>
			</div>
			</div>
		)
	}
}


export default Form;