import React, { useState } from 'react';
// import Test from './Test';
import Cart from '../../Common/Cart';
//import logo from "../../assets/images/logo.svg"

import State from "../../components/State";
import Effect from "../../components/Effect";

import ContextUse from "../../components/ContextUse";

const Home = () => {
    // console.log(require("../../assets/images/i.png"))
    const [num, setNum] = useState(0);
    return(
        <>
            <h1>Home Page</h1>
            <Cart/>
            <hr></hr>
            <State />
            <hr></hr>
            <h4>{num}</h4>
            <Effect />
            <button onClick={() => setNum(num+1)}>Update</button>
            <hr></hr>
            {/* <Test name="Shahrukh" fname="Lateef" desc="this is paragaph"/> */}
            
            <img src={require("../../assets/images/logo.svg").default } width="100"/>
            <MyClickFunction/>
            <hr></hr>
            <ContextUse/>
        </>
    )
}

const data = ['Pakistan', 1947, 'Imran Khan'];

function MyClickFunction() {
    const [country, idd, pm] = data;
    const [cv, setCounter] = useState(0);
    return (
    <>
    {country}, {idd}, {pm} <br></br>
        <button onClick={
        
        function ClickedFunc () {
    //alert('hi');
    return setCounter(cv+1);
  }
        
      }> {cv} </button>
      </>
    )}

export default Home;