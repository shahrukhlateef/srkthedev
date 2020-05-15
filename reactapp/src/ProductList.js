import React from 'react';

const ProductList = (props) => {
	
	return(
		
		<div className="col-sm-4">
			<div className="border text-center p-5 mb-5">
			<h3>{props.ptitle}</h3>
			<p>{props.pdesc}</p>
			<a href="" className="btn btn-success">Read More</a>
			</div>
		</div>
	
	);
	
}

export default ProductList;