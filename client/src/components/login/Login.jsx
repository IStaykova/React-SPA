
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = {email: '', password: ''};

export default function Login(){
  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password)
      navigate('/');
    } catch (err) {
      console.log(err.message);
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
          <button className="submit-button">Login</button>
        </form>
      </div>
    </>
  );
}