import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

   const sharecode = uuidv4(); 

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        sharecode: sharecode
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Join Chickadee</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Create Account" />
      </div>
    </form>
  );
}

export default RegisterForm;
