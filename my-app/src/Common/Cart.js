import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CartList from './CartList';


class Cart extends Component{
    constructor(){
        super();
        this.state = { name: "Welcome to Site"}
    }
    nameChange(){
        this.setState ( { name: "Welcome Shahrukh"} )
    } 
    render(){
        const cartsListArr = [
            {
                id:1,
                name: "Shahrukh",
                work: "UI Developer"
            },
            {
                id:2,
                name: "Sajjad",
                work: "UI Dev"
            },
            {
                id:3,
                name: "Umair",
                work: "Accounts"
            },
            {
                id:4,
                name:"Naveed",
                work: "Intern"
            }
        ]
        const claArry = cartsListArr.map((c, i) => {
            return <CartList key={i} id={cartsListArr[i].id} name={cartsListArr[i].name} work={cartsListArr[i].work} />
        });

        return(
        <>
        <hr></hr>
            <h2>{this.state.name}</h2>
                  {claArry}   
            <button className="flex" onClick={ () => this.nameChange() }>Click</button>
        </>
        )
    }
}    


export default Cart;