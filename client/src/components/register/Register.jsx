import './Register.css'
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = {username: '', email: '', password: '', rePassword: ''};

export default function Register(){
  const register = useRegister();
  const navigate = useNavigate();
  const [valuesError, setValuesError] = useState({});
  const emailPattern = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const registerHandler = async ({username, email, password, rePassword}) => {

    const newErrors = {};

    if (!username) {
      newErrors.username = ('Field should not be empty');
    }
    if (!email) {
      newErrors.email = ('Field should not be empty');
    }
    else if (!email.match(emailPattern)){
      newErrors.email = ('Invalid email');
    }
    if (!password) {
      newErrors.password = ('Field should not be empty');
    }
    else if (password.length < 3) {
      newErrors.password = ('Password should be at least 3 characters long');
    }
    if (!rePassword) {
      newErrors.rePassword = ('Field should not be empty');
    }
    if (password !== rePassword) {
      newErrors.rePassword = ('Different passwords');
    }
   
    setValuesError(newErrors);

    if(Object.keys(newErrors).length !== 0){
      return;
    }
   
    try{
      await register(username, email, password, rePassword)
      navigate('/');
      }catch(err){
          console.log('Register failed', err);
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
      {valuesError.username && <p style={{ color: 'red' }}>{valuesError.username}</p>}
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
      {valuesError.email && <p style={{ color: 'red' }}>{valuesError.email}</p>}
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
      {valuesError.password && <p style={{ color: 'red' }}>{valuesError.password}</p>}
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
      {valuesError.rePassword && <p style={{ color: 'red' }}>{valuesError.rePassword}</p>}
      <button className="submit-button">Register</button>
    </form>
  </div>
  </>
    );
}