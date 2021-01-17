import React, { useState, useContext } from 'react';
import Context from "./Context";

// Ex 1#
// function ContextUse()  {
//     const [count, setCount] = useState(0); 
//     return(
//         <>
//             <Message count={count} />
//             <BtnSubmit count={count} onUpdate={(num) => setCount(num)}/>
//         </>
//     )
// }
// function Message({count}) {
//     return(
//         <>
//             <h2>{count}</h2>
//         </>
//     )
// }

// function BtnSubmit({count, onUpdate}) {
//     return(
//         <>
//             <button onClick={() => onUpdate(count + 1)}>Update Count</button>
//         </>
//     )
// }

// Ex 2#
// function ContextUse() {
//     const [count, setCount] = useState(0); 
//     return(
//         <>
//             <Message count={count} onUpdate={(num) => setCount(num)}/>
//         </>
//     )
// }
// function Message({count, onUpdate}) {
//     return(
//         <>
//             <h2>{count}</h2>
//             <BtnSubmit count={count} onUpdate={onUpdate}/>
//         </>
//     )
// }

// function BtnSubmit({count, onUpdate}) {
//     return(
//         <>
//             <button onClick={() => onUpdate(count + 1)}>Update Count</button>
//         </>
//     )
// }

// Ex 3#
function ContextUse(params) {
   
    // const [count, setCount] = useState(
    //     {
    //         count: 1,
    //         updateCount: (num) => {
    //             setCount(({count,updateCount}) => {
    //                 return {
    //                     count: num,
    //                     updateCount: updateCount
    //                 }
    //             })
    //          }
    //     }
    // );

    const updateCount = (num) => {
        setCount(({count, updateCount}) =>{
            return(
                {
                    count: num,
                    updateCount: updateCount
                }
            )
        });
    }
    const [count, setCount] = useState(
        {
            count: 1,
            updateCount: updateCount
        }
    );

    return(
        <>
            <h1>useContext Hook</h1>
            <Context.Provider value={count}>
                <Message />
            </Context.Provider>
        </>
    )
}
function Message() {
    const {count} = useContext(Context);
    return(
        <>
            <h2>{count}</h2>
            <SubmitBtn />
        </>
    )
}
function SubmitBtn() {
    const {count, updateCount} = useContext(Context);
    return(
        <>
            <button onClick={ () => updateCount(count+1)}>Update Count</button>
            {/* <button onClick={updateCount}>Update Count</button> */}

        </>
    )
}

// function ContextUse(props) {
//     // 1 & 2 method
//     // const [count, setCount] = useState(0);
    
    
//     // const [count, setCount] = useState({
//     //     count: 0,
//     //     updateCount: (num) => setCount(({
//     //         count, updateCount
//     //     }) => {
//     //         return {count: num, updateCount: updateCount}
//     //     })
//     // });

//     const updateCount = () => {
//         setCount(({count, updateCount}) => {
//             return {count: count, updateCount:updateCount};
//         });        
//     };
//     const [count, setCount] = useState({
//         count:0,
//         updateCount: updateCount,
//     });

//     return (
//         <div className="mb7 pb4 bt bb tc">
//             <h1>useContext Hook (with props)</h1>
            
//             {/* one method */}
//             {/* <Message count={count}/> */}
//             {/* <BtnSubmit count={count} onUpdate={(num) => setCount(num)}/> */}

//              {/* 2nd method */}
//              {/* <Message count={count} onUpdate={(count)=> setCount(count)} /> */}

//              {/* 3rd method */}
//              <Context.Provider value={count}>
//                     <Message />
//              </Context.Provider>
//         </div>
//     );
// }
// function Message() {
//     const {count} = useContext(Context);
//     return(
//         <>
//             <div>
//                 <h3>{count}</h3>
                
//                 {/* 2nd method */} 
//                 {/* <BtnSubmit count={count} onUpdate={onUpdate}/> */}

//                 {/* 3rd method */}
//                 <BtnSubmit />
//             </div>
//         </>
//     );
// }
// function BtnSubmit() {
//     {/* 3rd method */}
//     const {count, updateCount} = useContext(Context);
//     return(
//         <>
//         {/* <button onClick={updateCount}>Update Count</button> */}
//         <button onClick={ () => updateCount(count + 2)}>Update Count</button>            
        
//         </>
//     )
// }




export default ContextUse;