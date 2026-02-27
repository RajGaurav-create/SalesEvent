import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const [user,setUser] = useState(null);

  return (
    <div>
    {user? <Dashboard username={user}/> : <Login setUser={setUser}/>}
    </div>
  )
}

export default App
