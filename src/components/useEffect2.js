import {useEffect, useState} from "react";

const Counter = () =>{
    const [count ,setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() =>{
        setCalculation(() => count**2)
    } , [count])


    return(
        <>
        <h1>Count :{count}</h1>
        <button onClick={()=>setCount((count)=>count+1)}>+</button>
            <h1>Calculation : {calculation}</h1>
        </>
    )
}

export default Counter;