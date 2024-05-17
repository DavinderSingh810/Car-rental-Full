import React from 'react'
import styles from '../styles/form.css';
import Logo from "../images/logo/logo.png";

function myfunction(){
  alert("hello dude")
}
function Register() {
  return (
    <div className='signbody'>
      <img src={Logo} alt="logo-img" className='signlogo'/>
    
     <div className='signcontainer'>
       
     <div className='formdiv'>
       <form className="signform">
         <header><h1><b>Register</b></h1></header>
         <label htmlFor="uname"><b>Username</b></label>
         <input type="text" placeholder="Enter Username" name="uname" required="required" />
 
     <label htmlFor="psw"><b>Password</b></label>
     <input type="password" placeholder="Enter Password" name="psw" required/>
         <button type="button" class="btn btn-danger" onClick={myfunction} id='signbutt'><h3>Register</h3></button>
 
       </form>
       </div>
       </div>
       </div>
       
     
   )
}

export default Register