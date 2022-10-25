import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Login.css';

// import MyContext from '../Context/MyContext';
// const {} = useContext(MyContext)

export default function Login() {
  const [enableButton, setButton] = useState(true);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  useEffect(() => {
    const verifyEmail = '@';
    const verifyEmailDot = '.com';
    const minPassword = 7;
    const validEmail = email.includes(verifyEmail) && email.includes(verifyEmailDot);
    const validPassword = password.length >= minPassword;
    const finalValidation = validEmail && validPassword;
    if (password.length < minPassword) {
      setButton(true);
    }
    if (finalValidation) {
      setButton(false);
    }
  }, [email, password]);

  const history = useHistory();

  const enterApp = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };
  return (
    <div className="loginForm">
      <form className="LoginFormComponent">
        <h4>email</h4>
        <input
          type="text"
          data-testid="email-input"
          value={ email }
          onChange={ (e) => setemail(e.target.value) }
        />
        <h4>password</h4>
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ (e) => setpassword(e.target.value) }
        />
        <br />
        <br />
        <button
          type="button"
          data-testid="login-submit-btn"
          onClick={ () => enterApp() }
          disabled={ enableButton }
        >
          Enter
        </button>
      </form>
    </div>
  );
}
