import React, { useEffect, useState } from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(11);
    const [toggle, setToggle] = useState(false);
    useEffect(()=>{
        // console.log("I am logging now", new Date());
        console.log("I am logging now", count);
        return () => console.log("i m removed V-DOM");
    },[count, num, toggle]);
    return (
        <div>
            <h1>useEffect:</h1>
            <br></br>
            <button onClick={ () => setCount(count+1) }>Update Count</button>
            <button onClick={ () => setNum(num+1) }>Update Num</button>
            <button onClick={ () => setToggle(!toggle) }>Update Toggle</button>
        </div>
    );
}

export default Effect;