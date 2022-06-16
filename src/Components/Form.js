import { useState } from "react";

function Form() {

    const [formData, setFormData] = useState({
        firstname : "",
        lastname:"",
        email:"",
        password:"",
        gender:""
    })

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

    const radioChange = (e) => {
        const {name, value} = e.target
       setChecked({
        ...checked,
        [e.target.value]: true
       })

       setFormData({
        ...formData,
        gender:value
       })
    }

    const  handleSubmit = (e) =>  {

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
        <input type="radio" className="input" checked={checked.Male} name="gender" value={"Male"} onChange={radioChange} /> Male
        <input type="radio" className="input" checked={checked.Female} name="gender" value={"Female"} onChange={radioChange} /> Female
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