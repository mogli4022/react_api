import { useState } from "react"
import Message from "./Message";

function Conditional() {

    const [login, setLogin] = useState(false)

    const Login = () => {
        setLogin(true)
    }

    const Logout = () => {
        setLogin(false)
    }

if(login === false){
    return(
        <>
        <Message message="Login Message"/>
        <button onClick={() => Login()}>Login</button>
        </>
    )
}else{
    return(
        <>
        <Message message="Logout Message"/>
        <button onClick={() => Logout()}>Logout</button>
        </>
    )
}
}

export default Conditional;