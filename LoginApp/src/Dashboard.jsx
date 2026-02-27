import React from 'react'

function Dashboard({username}) {
  return (
    <div className='dashboard-container'>
    <h1>Hello {username},</h1>
    <h2>Welcome to Gaurav market DashBoard!</h2>
    </div>
  );
}

export default Dashboard