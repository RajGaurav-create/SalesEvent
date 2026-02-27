import React,{useState} from 'react'

function Login({setUser}) {
  const[username,setUsername] = useState("")
  const[password,setPassword] = useState("")
  const[error,setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try{
        const responce = await fetch("http://localhost:8080/api/auth/login",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username,password}),
        });
        const data = await responce.json();
        if(responce.ok){
            setUser(data.username);
        }else{
            setError(data.message||"login Failed please try again");
        }
    } catch(error){
        setError("Something went wrong.Plese try again")
    }
  };
  
  return (
    <div className='login-container'>
    <h2 className='heading'>Login</h2>
    <form onSubmit={handleSubmit} className='login-form'>
        <label htmlFor="username" className='loginlabel'>
            Username
        </label>
        <input type="text"
        id='username'
        placeholder='Enter your username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='login-input'
        />
        <label htmlFor="password" className='login-label'>Password</label>
        <input type="text"
        id='password'
        placeholder='Enter Your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='login-input'
        />
        <button type='submit' className='login-btm'>Login</button>
    </form>
    {error && <p className='login-error'>{error}</p>}
    </div>
    
  );
}

export default Login;