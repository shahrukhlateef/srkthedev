import React,{Component} from 'react';
import ProductList from './ProductList';

class Product extends Component{
	constructor(){
		super();
		
	}
	
	render(){
	
	const pListAry = [
	{id:1, ptitle:"P Title1", pdesc:"Search for the keywords to learn more about each warning."},
	{id:2, ptitle:"P Title2", pdesc:"P description..."},
	{id:3, ptitle:"P Title3", pdesc:"P description..."}
	]
	
	const pListAryVar = pListAry.map((plistlist, i) => {		
		return(
		<ProductList id={pListAry[i].ptitle} ptitle={pListAry[i].ptitle} pdesc={pListAry[i].pdesc} />
		)
	})
	
	
    
        return(
            <div className="container">
                <div className="row">
				{pListAryVar}
                </div>
            </div>
        )
    }
}

export default Product;