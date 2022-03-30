import React from 'react'
import { useState } from 'react'
import axios from '../../Api/axios'
import '../SignUp/SignUp.css'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()

  }
  

  return (
    <div>
      <div className='container'>

        <form className='form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"><span>Full name</span></label>
            <input type="text" className="form-control" required placeholder="Enter Full name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email"><span>Email address</span></label>
            <input type="email" className="form-control" required placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password"><span>Password</span></label>
            <input type="password" className="form-control" required minLength={8} maxLength={20} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>


      </div>

    </div>
  )
}

export default SignUp