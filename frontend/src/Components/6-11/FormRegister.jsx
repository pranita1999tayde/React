import { useState } from "react";

function FormRegister (){
    const [userData, setUserdata] = useState({name:"", email:"",password:""})

    console.log(userData, "userData State")

    function hadleChange(event){
        // console.log(event.target.value ,event.target.name)
        console.log({...userData, [event.target.name]: event.target.value})
    }
    function submit(){
        alert("Form Submit")
    }

    return (
        <div>
           <h1> Register</h1>
           <form onSubmit={submit}>
            <lable>name </lable><br/>
           <input type= "text"required onChange={hadleChange} name='name'  /><br/>
           <lable>email</lable><br/>
           <input type= "email"required onChange={hadleChange}  name='email'/><br/>
           <lable>password</lable><br/>
           <input type= "password"required onChange={hadleChange}  name='password'/><br/>
           <input type= "submit" value= "Submit"/><br/>
           </form>
        </div>
    )
}
export default FormRegister;
