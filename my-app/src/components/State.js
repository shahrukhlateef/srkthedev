import React, { useState } from 'react';

function State() {
    // Ex-1
    const [counter, setCounter] = useState(0);
// Ex-2
    const [users, setUsers] = useState([
        {name:'Shahrukh', age:30, city: 'Karachi'},
        {name: 'Umair', age: 31, city: 'Dubai'}
    ]); 
    const submitForm = (e) => {
        const user = {name:'sajjad', age:30, city:'karachi'}
        setUsers([...users, user]);
    }
    return (
        <div>
            <hr></hr>
            Ex-1
            <h1>useState</h1>
            <h2>{counter}</h2>
            {/* <button onClick={
                function clickFunc(){
                    return setCounter(counter+1);
                }
            }>Increment</button> */}
            <button onClick={() => setCounter(counter+1)}>Increament</button>
            <button onClick={() => setCounter(counter-1)}>DecReament</button>
            <hr></hr>
            Ex-2
            { users.map((user, i) => {
                return <>
                    <ul key={i}>
                    <li>User Name= {user.name}</li>
                    <li>User Age= {user.age}</li>
                    <li>User City= {user.city}</li>
                    </ul>
                    
                </>
            }) }
            <button onClick={submitForm}>Submit</button>
        </div>
    );
}

export default State;