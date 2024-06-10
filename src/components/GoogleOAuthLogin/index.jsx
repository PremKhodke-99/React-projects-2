import React, { useEffect, useState } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'

function GoogleOAuth() {
    const [authInfo, setAuthInfo] = useState(null);
    const [error, setError] = useState(null);
    const [profileInfo, setProfileInfo] = useState(null);

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (response) => setAuthInfo(response),
        onError: (error) => setError(error)
    })

    function handleLogout() {
        googleLogout();
        setAuthInfo(null);
        setProfileInfo(null);
    }

    async function fetchProfileInfo() {
        const response = await fetch(`https:///www.googleapis.com/oauth2/v1/userinfo?access_token=${authInfo?.access_token}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authInfo?.access_token}`,
                Accept: "Application/json"
            }
        });

        const result = await response.json();
        setProfileInfo(result)
        console.log(result, 'resu');
    }

    useEffect(() => {
        if (authInfo) {
            fetchProfileInfo();
        }
    }, [authInfo])

    return (
        <div className='google-auth-container'>
            <h1>Google Auth Login</h1>
            {
                profileInfo !== null ? <div>
                    <img src={profileInfo?.picture} alt="Profile Info" />
                    <p>{profileInfo?.name}</p>
                    <p>{profileInfo?.email}</p>
                    <button onClick={handleLogout}>Log out</button>
                </div> : <button onClick={handleGoogleLogin}>Google Login</button>
            }

        </div>
    )
}

export default GoogleOAuth