import React from 'react'

function Dashboard(user) {
  return (
    <div className='dashboard'>
        <h1>Welcome to validations world</h1>
        <p><span>{user}</span> You are successfully validated</p>
    </div>
  )
}

export default Dashboard