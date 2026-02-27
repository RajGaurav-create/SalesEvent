import React,{useState,} from 'react'
import {useNavigate} from 'react-router-dom'

function Registered() {
  const[name,setName] = useState("")
  const[password,setPassword] = useState("")
  const[age,setAge] = useState("")
  const[marks,setMarks] = useState("")
  const[error,setError] = useState("")
  const navigate = useNavigate()

  const subsubmit = async (e) => {
    e.preventDefault()
    setError("")
    try{
    const responce = await fetch("http://localhost:8080/api/registered",{
      method:"POST",
      headers:{"Content-Type":"application/json",},
      body: JSON.stringify({name,password,age,marks}),
    });
    if(responce.ok){
      navigate("/")
    }else{
      setError("Please try again")
    }
  }catch(error){
    setError("Something went wrong please try again")
  }
  };

  return (
    <div className='registerd'>
     <form  className='registered-form' onSubmit={subsubmit}>
      <label htmlFor="registered-name">UserName</label>
      <input type="text"
         className='name-input'
         id='registered-name'
         placeholder='Enter your name' 
         value={name}
         onChange={e=>setName(e.target.value)}     
      />
       <label htmlFor="registered-pass">Password</label>
      <input type="text"
         className='pass-input'
         id='registered-pass'
         placeholder='Enter your password' 
         value={password}
         onChange={e=>setPassword(e.target.value)}     
      />
       <label htmlFor="registered-age">Age</label>
      <input type="text"
         className='age-input'
         id='registered-age'
         placeholder='Enter your name' 
         value={age}
         onChange={e=>setAge(e.target.value)}     
      />
       <label htmlFor="registered-mark">Marks</label>
      <input type="text"
         className='mark-input'
         id='registered-mark'
         placeholder='Enter your name' 
         value={marks}
         onChange={e=>setMarks(e.target.value)}     
      />
      <input type="submit" />
     </form>
     {error && <p className='error-input'>{error}</p>}
    </div>
  )
}

export default Registered