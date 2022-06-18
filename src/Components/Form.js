import { useState } from "react";

function Form() {

    const [formData, setFormData] = useState({
        firstname : "",
        lastname:"",
        email:"",
        password:"",
        gender:"",
    })
const [hobbies, setHobbies] = useState([])
const [temp, setTemp] = useState([])

const [checked, setChecked] = useState(
        {
            Male:false,
            Female:false
        }
    )

    const handleChange = (e) => {
        const {name, value} = e.target
        
       setFormData({
        ...formData,
        [name]:value
       })
    }

    // for radio

    const redioChange = (e) => {
        const {name, value} =  e.target

        console.log(value);
       setChecked({value:true})

        setFormData({
            ...formData, 
            gender: value
        })
    }

    // for checkbox
    const handleCheckBox = (e) => {
        const {name, value} = e.target
        temp.push(value)
        setHobbies(temp)
    }

    const  handleSubmit = (e) =>  {
        
        console.log(hobbies);
        // set null fordata values

       setChecked({
        ...checked,
            Male:false,
            Female:false
        })

        setFormData({
            ...formData, 
            firstname:"",
            lastname:"",
            email:'',
            password:'', 
            gender:''
        })

        e.preventDefault();
      }
    

    return ( 
        <>
<div className="form_div">
    <h1>Registration Form</h1>
    <form  onSubmit={handleSubmit}>
        <div className="input_div">
        <label className="label">First Name : </label>
        <input type="text" className="input" name="firstname" value={formData.firstname} onChange={handleChange}/>
        </div>

        <div className="input_div">
        <label className="label">Last Name : </label>
        <input type="text" className="input" name="lastname" value={formData.lastname} onChange={handleChange}/>
        </div>
        
        <div className="input_div">
        <label className="label">Email : </label>
        <input type="text" className="input" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        
        <div className="input_div">
        <label className="label">Password : </label>
        <input type="password" className="input" name="password" value={formData.password} onChange={handleChange}/>
        </div>
        
        <div className="input_div">
        <label className="label">Gender : </label>
        <input type="radio" className="input" name="gender" checked={checked.Male}  value="Male" onClick={redioChange} /> Male
        <input type="radio" className="input" name="gender" checked={checked.Female} value="Female" onClick={redioChange}/> Female
        </div>

        <div className="input_div">
        <label className="label">Hobbies : </label>
        <input type="checkbox" className="input" name="Sports" value="Sports" onChange={handleCheckBox} /> 
        Sports
        <input type="checkbox" className="input" name="Reading" value="Reading" onChange={handleCheckBox}/> 
        Reading
        <input type="checkbox" className="input" name="Travelling" value="Travelling"  onChange={handleCheckBox}/> 
        Travelling
        <input type="checkbox" className="input" name="Other" value="Other" onChange={handleCheckBox}/> 
        Other...
        </div>
        
        <div className="input_div">
        <input type="submit" className="submit"/>
        </div>
    </form>
</div>
        </>
     );
}

export default Form;