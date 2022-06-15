import { useState } from "react";

function LoggedIn() {
    
    const [login, setLogin] = useState(false)

    const handleSubmit = () => {
        setLogin(!login)
    }

    return ( 
        <>
        {
            login === false ? <h1>User Logged In</h1> :
            <h1>User Log Out</h1>
        }

        <button onClick={() => handleSubmit()}>Submit</button>
        </>
     );
}

export default LoggedIn;