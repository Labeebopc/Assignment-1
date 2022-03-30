import React, { useState } from 'react'
import '../SignIn/SignIn.css'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email,password);

  }
  return (
    <div>
      <div className='container'>

        <form className='form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"><span>Email address</span></label>
            <input type="email" className="form-control" required placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password"><span>Password</span></label>
            <input type="password" className="form-control" required minLength={8} maxLength={20} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
    

      </div>
    </div>
  )
}

export default SignIn