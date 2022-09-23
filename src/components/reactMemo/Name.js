// const Todos = ({ todos }) => {
//     console.log("child render");
//     return (
//         <>
//             <h2>My Todos</h2>
//             {todos.map((todo, index) => {
//                 return <p key={index}>{todo}</p>;
//             })}
//         </>
//     );
// };
//
// export default Todos;

import {memo} from "react";

const Name = ({names}) =>{
    return(
<>
          <h2>Names are</h2>
            {names.map((name,index)=>{
                return <p key={index}>{name}</p>
            })}
        </>
    )
}
export default memo(Name);