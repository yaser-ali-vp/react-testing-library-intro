import React, { useState } from 'react';

import '../../App.css';


const Login = () => {
    const formInitValues = {
        username: '',
        password: ''
    };

    const [form, setForm] = useState(formInitValues);
    const [alert, setAlert] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.username || !form.password) {
            setAlert('All fields are required');
        }
        else {
            setAlert('Incorrect username or password');
        }
    }

    return (
        <div className="login-contatiner">
            <h4>Existing user login here</h4>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => { handleChange(e) }} value={form.username} name="username" data-testid="username-field" />
                <input type="password" onChange={(e) => { handleChange(e) }} value={form.password} name="password" data-testid="password-field" />
                {alert && <div>{alert}</div>}
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
