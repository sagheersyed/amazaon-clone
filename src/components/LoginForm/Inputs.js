import React, { useState } from 'react'
import './Input.css'
// import {} from '@react'
const Inputs = () => {
  const [userInputs , setUserInputs] = useState({
    name : '',
    email : '',
    password : ''
  });

  const nameChangeHandler = (event) => {
      setUserInputs((previousState)=> {
        return {...previousState , name : event.target.value}
      })
  }

  const passwordChangeHandler = (event) => {
    setUserInputs((previousState)=> {
      return {...previousState , password : event.target.value}
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      name : userInputs.name,
      password : userInputs.password
    }
    setUserInputs((previousData)=> {
      return {
        name : '',
        password : '',
        email : ''
      }
    })
    console.log(formData)
  }

  console.log(userInputs)
  return (
    <form onSubmit={submitHandler}>
        <div className='input-container'>
          <div className='input'>
            <label>Name</label><br />
            
            <input 
              type="text"
              value={userInputs.name}
              placeholder="Enter Your Name"
              onChange={nameChangeHandler} />
              <hr />
          </div>
          <div className='input'>
            <label>Password</label><br />
            <input  
              type="password"
              value={userInputs.password}
              placeholder="Enter your Password"
              onChange={passwordChangeHandler} />
              <hr />
          </div>
          <div className='forget-info'>
            <h3 className='heading-3'>Forget Password?</h3>
          </div>
        </div>
        <div className='button-container'>
          <button className='button' type="submit">LOGIN</button>
        </div>
    </form>
  )
}

export default Inputs
