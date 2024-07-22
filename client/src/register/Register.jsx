import { useEffect, useState } from "react"
import './Register.css'

export default function Register(){

// const [user, setUser] = useState({});

// useEffect(() => {
//     (async () => {
//         const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles')
//     })
// })

// const formSubmitHandler = (e) => {
//     e.preventDefault();

// }
    return (
    <>
    <div className="register-container">
    <form className="register-form" onSubmit="">
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
        //   value={formData.username}
        //   onChange={handleChange}
        //   required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
        //   value={formData.email}
        //   onChange={handleChange}
        //   required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
        //   value={formData.password}
        //   onChange={handleChange}
        //   required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
        //   value={formData.confirmPassword}
        //   onChange={handleChange}
        //   required
        />
      </div>
      <button type="submit" className="submit-button">Register</button>
    </form>
  </div>
  </>
  
    );
}