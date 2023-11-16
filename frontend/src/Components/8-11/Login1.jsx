import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login1(){
    const[loginData, setLoginData]= useState({email:"", password:""})
    const router = useNavigate();

    // console.log(loginData, "loginData")


    function hadleChange(event){
        // console.log(event.target.value, event.target.name)
        setLoginData({...loginData,[event.target.name]: event.target.value})
    }
   async function Login(event){
        event.preventDefault();
        if(loginData.email && loginData.password)
           if(loginData.password.length > 7){
            try{
                const response = await axios.post('http://localhost:8000/login', {loginData})
                if(response.data.success){
                    alert(response.data.message)
                    router('/')
                }
            }catch(error){
                alert(error.response.data.message)
            }
           }else{
            alert("password length must be more tahn 7 digit")
           }else{
            alert("all fields are mandatory")
           }
    }
    function submit(){
        alert("successfully submit")
    }

    return(
        <div>
        <h1>Login</h1>
        <form onSubmit= {submit} >
            <lable>Email</lable><br/>
            <input type="email" onChange={hadleChange} name="email"/><br/>
            <lable>Password</lable><br/>
            <input type="password" onChange={hadleChange} name="password"/><br/>
            <input type="submit" value="Submit"/><br/>
        </form>
        </div>

    )

}
export default Login1;
