import {useState} from "react";

const Profile  = () =>{
    const [state ,setState] = useState({
        firstName : "jack",
        lastName : "Doe",
        age : 32,
        email : "dchjs@gmail.com"
    })
    // const updateName = () => {
    //     setCar(previousState => {
    //         return { ...previousState, color: "blue" }
    //     });
    // }


    const changeName = ()=>{
        setState(prevState => {
            return {...prevState , firstName: "john"}
        } )
    }

    return(
        <div>
            <h3>Hello {state.firstName}</h3>
            <h3> {state.firstName} {state.lastName}</h3>

            <button onClick={changeName}>click</button>
        </div>
    )
}

export default Profile;