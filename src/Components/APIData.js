import axios from 'axios'
import { useEffect, useState } from 'react';
function APIData() {

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            setData(response.data)
        })
        .catch((e)=> {
            console.log(e);
        })
    },[])
    return ( 
        <>
        {/* <p>
            {data[0]}
        </p> */}
        {
            data.map((value, index) => {
               return(
               <div  key={index}>
                <h1>{value.id}</h1>
                 <h3>{value.title}</h3>
                <p>{value.body}</p>
               </div>
               )
            })
        }
        </>
     );
}

export default APIData;