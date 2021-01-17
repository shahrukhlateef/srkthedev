import React from 'react';
import ReactDOM from 'react-dom';

const CartList = (props) => {
    
    return(
        <>
            <div className="ma3 pa3 bg-near-white ba b--red dib tc">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="image" height="140"/>
            <h2 className="">{props.name}</h2>
            <p>{props.work}</p>
            </div>
        </>
    )
}

export default CartList;