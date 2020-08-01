import React, { useState } from 'react';
import axios from 'axios';

const signUpEndPoint = 'http://localhost:3001/auth/signup';

export const SignUp = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    const dataForBackEnd = {
        username: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
    };
    axios.post(signUpEndPoint, dataForBackEnd)
    .then(res => {
        alert('submitted to the API');
        console.log(res.data);
    })
    .catch(error => {
        alert(error);
        console.log(error);
    })
  }

    return (
        <form onSubmit={() => {handleSubmit()}}>
            <input
                value={username}
                type="text"
                placeholder="Username"
                onChange={event => setUsername(event.target.value)}
            />
            <input
                value={email}
                type="email"
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
            />
            <input
                value ={password}
                type="password"
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
            />
            <input
                value ={passwordConfirmation}
                type="password"
                placeholder="Password confirm"
                onChange={event => setPasswordConfirmation(event.target.value)}
            />
            <button type="submit">Sign up</button>
      </form>
    )
};

export default SignUp;
