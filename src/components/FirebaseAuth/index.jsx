import React from 'react'
import './auth.css'
import UnauthPage from './unauth-page'
import AuthPage from './auth-page'
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function FirebaseAuth() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='firebase-auth-container'>
            <h1>Firebase Auth</h1>
            {
                loading ? (
                    <h1>Loading! Please wait</h1>
                ) : user ? (
                    <AuthPage />
                ) : (
                    <UnauthPage />
                )
            }
        </div>
    )
}

export default FirebaseAuth