import React, { useState } from 'react'
import './form.css'

const FormValidation = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        username: '',
        password: '',
        email: '',
    });

    function handleOnChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateInput(name, value);
    };

    function validateInput(getName, getValue) {
        switch (getName) {
            case 'username':
                setError(prevErrors => ({
                    ...prevErrors,
                    username: getValue.length < 3 ? 'Username must be atleast 3 characters' : ''
                }));
                break;
            case 'email':
                setError(prevErrors => ({
                    ...prevErrors,
                    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue) ? '' : 'Invalid email address'
                }));
                break;
            case 'password':
                setError(prevErrors => ({
                    ...prevErrors,
                    password: getValue.length < 5 ? 'Password must be atleat 5 Characters' : ''
                }));
                break;
            default:
                break;
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const validateErrors = {};
        Object.keys(formData).forEach(dataItem => {
            validateInput(dataItem, formData[dataItem]);
            if (error[dataItem]) {
                validateErrors[dataItem] = error[dataItem]
            }
        });
        setError(prevError => ({
            ...prevError,
            ...validateErrors
        }));

        if (Object.values(validateErrors).every(error => error === '')) {
            //perform your submission login
        } else {
            console.log('error is present. please fix');
        }
    }
    return (
        <div className='form-validation-container'>
            <h1>Form Validation</h1>
            <form onSubmit={handleFormSubmit}>
                <div className='input-wrapper'>
                    <label htmlFor='username'>User Name</label>
                    <input
                        type="text"
                        name='username'
                        id='username'
                        placeholder='Enter Your username'
                        value={formData.username}
                        onChange={handleOnChange}
                    />
                    <span>{error?.username}</span>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        placeholder='Enter Your email'
                        value={formData.email}
                        onChange={handleOnChange}
                    />
                    <span>{error.email}</span>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        placeholder='Enter Your password'
                        value={formData.password}
                        onChange={handleOnChange}
                    />
                    <span>{error.password}</span>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormValidation