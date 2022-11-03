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
    <div className="w-full max-w-xs ">

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center
      border-solid
      border-2
             border-vesuvius-500/50"
      >
        <div className="mb-4">
          <h2 className="text-vesuvius-800">App Receitas</h2>
        </div>
        <div className="mb-4">
          <h4
            className="block text-vesuvius-700 text-sm font-bold mb-2"
          >
            email

          </h4>
        </div>
        <div className="mb-4">

          <input
            className="shadow
             appearance-none
             border
             border-vesuvius-700
              text-vesuvius-700
               rounded
                w-full
                py-2 px-3
                 mb-3
                 leading-tight
                 focus:outline-none
                 focus:shadow-outline"
            type="text"
            data-testid="email-input"
            value={ email }
            onChange={ (e) => setemail(e.target.value) }
          />

        </div>
        <div className="mb-4">
          <h4
            className="block text-vesuvius-700 text-sm font-bold mb-2"
          >
            password

          </h4>
        </div>
        <div className="mb-4">
          <input
            className="shadow
            appearance-none
             border

              rounded
              w-full
               py-2 px-3
               border-vesuvius-700
               text-vesuvius-700
               mb-3
               leading-tight
                focus:outline-none
                focus:shadow-outline"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ (e) => setpassword(e.target.value) }
          />
        </div>
        <div className="">

          <button
            className="
          bg-vesuvius-500
           hover:bg-vesuvius-700
            text-white font-bold
            py-2 px-4 rounded
             focus:outline-none
              focus:shadow-outline
          text-vesuvius-700 "
            type="button"
            data-testid="login-submit-btn"
            onClick={ () => enterApp() }
            disabled={ enableButton }
          >
            Enter
          </button>
        </div>

      </form>
    </div>
  );
}
