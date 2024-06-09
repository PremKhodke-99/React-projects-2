import React, { useState } from 'react'
import { loginUsingEmailAndPassword, registerUsingEmailAndPassword } from '../../firebase';

function Registration({ formData, setFormData, handleRegister }) {
    return <div className='register'>
        <div className="input-wrapper">
            <label htmlFor="name">Full Name:</label>
            <input
                id='name'
                type='text'
                name='name'
                value={formData.name}
                placeholder='Enter your full name'
                onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value
                })}
            />
        </div>
        <div className="input-wrapper">
            <label htmlFor="email">Email:</label>
            <input
                id='email'
                type='email'
                name='email'
                value={formData.email}
                placeholder='Enter your email'
                onChange={(e) => setFormData({
                    ...formData,
                    email: e.target.value
                })}
            />
        </div>
        <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input
                id='password'
                type='password'
                name='password'
                value={formData.password}
                placeholder='Enter your password'
                onChange={(e) => setFormData({
                    ...formData,
                    password: e.target.value
                })}
            />
        </div>
        <button onClick={handleRegister}>Register</button>
    </div>
}

function Login({ formData, setFormData, handleLogin }) {
    return <div className='login'>
        <div className="input-wrapper">
            <label htmlFor="email">Full Name:</label>
            <input
                id='email'
                type='email'
                name='email'
                value={formData.email}
                placeholder='Enter your email'
                onChange={(e) => setFormData({
                    ...formData,
                    email: e.target.value
                })}
            />
        </div>
        <div className="input-wrapper">
            <label htmlFor="password">Full Name:</label>
            <input
                id='password'
                type='password'
                name='password'
                value={formData.password}
                placeholder='Enter your password'
                onChange={(e) => setFormData({
                    ...formData,
                    password: e.target.value
                })}
            />
        </div>
        <button onClick={handleLogin}>Login</button>
    </div>
}

const UnauthPage = () => {
    const [isLoginView, setIsLoginView] = useState(false);
    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    })

    function handleRegister() {
        const { name, email, password } = registerFormData;
        registerUsingEmailAndPassword(name, email, password);
    }

    function handleLogin() {
        const { email, password } = loginFormData;
        loginUsingEmailAndPassword(email, password);
    }

    return (
        <div className='unauth-page-container'>
            <div className='unauth-tab-view-container'>
                <button onClick={() => setIsLoginView(false)}>Register View</button>
                <button onClick={() => setIsLoginView(true)}>Login View</button>
            </div>
            {
                isLoginView ? <Login
                    formData={loginFormData}
                    setFormData={setLoginFormData}
                    handleLogin={handleLogin}
                /> : <Registration
                    formData={registerFormData}
                    setFormData={setRegisterFormData}
                    handleRegister={handleRegister}
                />
            }
        </div>
    )
}

export default UnauthPage