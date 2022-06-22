import axios from 'axios'
import { useEffect, useState } from 'react';
function APIData() {

    const [data, setData] = useState([])
    const [notesData, setnotesData] = useState({
        title:'',
        content:''
    })

    useEffect(() => {
        axios.get("http://localhost:5000/notes")
        .then((response) => {
            setData(response.data)
        })
        .catch((e)=> {
            console.log(e);
        })
    },[])

    // Handle change

    const handleChange = (e) => {
        setnotesData({
            ...notesData,
            [e.target.name]:e.target.value
        })
    }

    const addNotes = async () => {
        await axios.post("http://localhost:5000/notes", notesData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((e)=> {
            console.log(e);
        })
        console.log(data);
    }

    return ( 
        <>

    <div>
        <h3>title:</h3>
        <input type="text" name="title" value={notesData.title} onChange={handleChange}/>
        <h3>content:</h3>
        <input type="text" name="content" value={notesData.content} onChange={handleChange}/>
        <div style={{marginTop:"15px"}}><button onClick={addNotes}>Add</button></div>
    </div>
        {
            data.map((value) => {
                return(
                    <div key={value._id}>
                        <h1>{value.title}</h1>
                        <p>{value.content}</p>
                    </div>
                )
            })
        }


        </>
     );
}

export default APIData;