import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Name";

//
// const Add = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState(["todo 1", "todo 2"]);
//
//     const increment = () => {
//         setCount((c) => c + 1);
//     };
//
//     return (
//         <>
//             <Todos todos={todos} />
//             <hr />
//             <div>
//                 Count: {count}
//                 <button onClick={increment}>+</button>
//             </div>
//         </>
//     );
// };

// export default Add;

// import {useState} from "react";
import Name from "./Name";

function Add(){
    const [num ,setNum] = useState(0);
    const [names ,setName] = useState(['john','jack']);

    const incrementNum =  () =>{
        setNum((n) => n+1);
    }

    return(
        <>
            <Name names={names}/>
            <div>
                num :{num}
                <button onClick={incrementNum}>+</button>
            </div>
        </>
    )
}

export default Add;