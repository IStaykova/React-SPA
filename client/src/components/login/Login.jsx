import { useNavigate } from 'react-router-dom';
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from 'react';

const initialValues = {email: '', password: ''};

export default function Login(){
  const login = useLogin();
  const navigate = useNavigate();
  const [valuesError, setValuesError] = useState({});
  const emailPattern = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const loginHandler = async ({ email, password }) => {

    const newErrors = {};

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
   
    setValuesError(newErrors);

    if(Object.keys(newErrors).length !== 0){
      return;
    }

    try {
      await login(email, password)
      navigate('/');
    } catch (err) {
      console.log('Login failed', err);
    }
  }

  const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

  return (
    <>
      <div className="register-container">
        <form className="register-form" onSubmit={submitHandler}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="login-email"
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
              id="login-password"
              name="password"
              value={values.password}
              onChange={changeHandler}
            />
          </div>
          {valuesError.password && <p style={{ color: 'red' }}>{valuesError.password}</p>}
          <button className="submit-button">Login</button>
        </form>
      </div>
    </>
  );
}