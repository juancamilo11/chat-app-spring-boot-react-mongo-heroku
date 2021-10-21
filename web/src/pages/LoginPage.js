import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { login } from "../actions/authActions";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


firebase.initializeApp({
    apiKey: "AIzaSyD1FAJa3tEqtFHa2oBtr_hn3mEymVW5-aY",
    authDomain: "chat-app-sofka.firebaseapp.com",
    projectId: "chat-app-sofka",
    storageBucket: "chat-app-sofka.appspot.com",
    messagingSenderId: "125870203988",
    appId: "1:125870203988:web:c22b550089554beae439c1",
    measurementId: "G-5YS3R0Z7YC"
  });


const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
};

const signin = (email, password)=>{
	return auth().signInWithEmailAndPassword(email, password);
}

const auth = firebase.auth();


export const LoginPage = ({dispatch}) => {

    const [userData, setuserData] = useState({
        email:'',
        password:''
    })

    const handleInputChange = (event) => {
        setuserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }

    const loginUser = (event) => {
        event.preventDefault()
        return auth.signInWithEmailAndPassword(userData.email, userData.password)
            .then(()=>{
                Swal.fire('Bienvenido....')
            })
            .catch(()=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o contraseña invalida'
                })
            })
    }

    const [user] = useAuthState(auth);
    if (user) {
        dispatch(login(user.email, user.uid));
    }

    return (
        <div>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Application<br/> Login Page</h2>
                    <p>Login or register from here to access.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form onSubmit={loginUser}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input 
                                    type="text" 
                                    id="login"
                                    name="email"
                                    className="form-control" 
                                    placeholder="User email"
                                    onChange={handleInputChange}
                                    value={userData.email} />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password" 
                                    onChange={handleInputChange}
                                    value={userData.password} />
                            </div>
                            <button type="submit" className="btn-login btn-email">Login</button>
                            <button 
                                type="button" 
                                className="btn-login btn-google"
                                onClick={signInWithGoogle}>Login with Google account</button>
                        </form>
                        <div>New to this website? <Link to="/register">Click register</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login;