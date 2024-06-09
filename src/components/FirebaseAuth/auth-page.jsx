import React, { useEffect, useState } from 'react'
import { auth, db, logout } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection, getDocs, query, where } from 'firebase/firestore';
import FirebaseTodo from '../FirebaseTodo';

const AuthPage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState(null);

    async function fetchUserDetails() {
        try {
            const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
            const extractCurrentDocument = await getDocs(q);
            const data = extractCurrentDocument.docs[0].data();

            setUserInfo(data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(userInfo);

    useEffect(() => {
        if (user) {
            fetchUserDetails();
        }
    }, [user, loading])
    return (
        <div>
            <h1>Auth Page</h1>
            {
                userInfo && <div>
                    <div>User Name: {userInfo?.name}</div>
                    <div>User Email: {userInfo?.email}</div>
                </div>
            }
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default AuthPage