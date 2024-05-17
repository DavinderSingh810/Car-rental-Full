import React from 'react'

import styles from '../styles/form.css';
import Logo from "../images/logo/logo.png";


function sign() {
  return (
   <div className='signbody'>
     <img src={Logo} alt="logo-img" className='signlogo'/>
   
    <div className='signcontainer'>
      
      
    <div className='formdiv'>
      <form className="signform" method="POST" action="/sign" >
        <header><h1><b>Sign In</b></h1></header>
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required="required" />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        <button type="submit" class="btn btn-danger" id='signbutt'><h3>SignIn</h3></button>

      </form>
      </div>
      </div>
      </div>
      
    
  )
}

export default sign