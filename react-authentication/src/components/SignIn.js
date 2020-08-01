import React, { useState } from 'react';
import axios from 'axios';
var request = require("request");

const signInEndPoint = 'http://localhost:3001/auth/signin';

export const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const dataForBackEnd = {
            "auth": {
                "email": `${email}`,
                "password": `${password}`
            }
        };

        axios({
            method: "post",
            url: signInEndPoint,
            auth: {
               email: email,
               password: password
            },
            headers: {
               "content-type": "application/json"
            }
        })
        .then((res) => {
            console.log(res.data.jwt);
        })
        .catch((error) => {
            alert(error);
        })
    }

    return (
        <form onSubmit={() => {handleSubmit()}}>
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
            <button type="submit">Sign in</button>
        </form>
    )
}
