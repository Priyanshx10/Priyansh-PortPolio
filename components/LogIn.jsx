import React from 'react'

const LogIn = ({ isLoggedIn }) => {
  return (
    <div>
    {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
  </div>
  )
}

export default LogIn