import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app_context";
import { login } from "../../util/api";
import { saveToken, saveUser } from "../../util/local";

import "./signin.css";
const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);
  const [form, setForm] = useState({});
  const handleClickSubmit = async ({ target }) => {
    let authResponse = await login(form);

    const { userId, username } = authResponse;
    if (userId && username === form.username) {
      console.log(authResponse);
      saveUser(JSON.stringify(authResponse));
      setUser(authResponse);
      saveToken(authResponse.accessToken);
      navigate("/dashboard");
    }
  };

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div className="login_main_wrapper">
      <div className="login_container">
        <div className="title">Login</div>
        <div className="input_container">
          <div>Email</div>
          <input
            type="text"
            name="username"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div className="input_container">
          <div>Password</div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <div className="forgot_password_container">
          <a href="/forgot">Forgot password?</a>
        </div>
        <div className="button_container">
          <button onClick={handleClickSubmit}>Login</button>
        </div>
        <div className="existing_user_container">
          I’m a new user. <a href="/signup">Create Account</a>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default SignIn;
