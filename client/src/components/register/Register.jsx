
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import './Register.css'


const initialValues = {username: '', email: '', password: '', rePassword: ''};

export default function Register(){
  const [error, setError] = useState('');
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async ({username, email, password, rePassword}) => {
    if(password !== rePassword){
      setError('Different passwords!');
      return;
    }
    try{
      await register(username, email, password, rePassword)
      navigate('/');
      }catch(err){
          setError(err.message);
      }
  };

  const {values, changeHandler, submitHandler} = useForm(initialValues, registerHandler);

    return (
    <>
    <div className="register-container">
    <form className="register-form" onSubmit={submitHandler}>
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="rePassword"
          name="rePassword"
          value={values.rePassword}
          onChange={changeHandler}
        />
      </div>
      {error && (
         <p>
          <span className="error">{error}</span>
        </p>
      )}
     
      <button className="submit-button">Register</button>
    </form>
  </div>
  </>
  
    );
}