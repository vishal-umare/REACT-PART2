// export default function Counter(){

//     let count = 0;
//     function IncreseCount(){
//         count += 1;
//         console.log(count);
//     }

//     return(
//         <div>
//             <h1>count is {count}</h1>
//             <button onClick={IncreseCount}>Increse Count </button>
//         </div>
//     )
// }


// --------------------------states----------------------------


import { useState} from "react";

export default function Counter(){

    let [count , setCount] = useState(0);

    function IncreseCount(){
        setCount((currCount) =>{
            return currCount + 1;
        });
        setCount((currCount) =>{
            return currCount + 1;
        });
    }

    return(
        <>
        <h1>Count = {count}</h1>
        <button onClick={IncreseCount}> Click me!</button>
        </>
    )
}