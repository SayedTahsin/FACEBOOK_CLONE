import { Button } from '@mui/material';
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {

        signInWithPopup(auth, provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.facebook.com/images/fb_icon_325x325.png" />
                <img src="https://www.freeiconspng.com/uploads/facebook-simple-text-22.png" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login