import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firbase.int';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from 'bootstrap';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
    
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigation = useNavigate()

      let errorElement;
     if(error)
     { errorElement = (
        <div>
          <p className="text-danger">Error:{error.message}</p>
        </div>
      )}
    const handleSubment = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      signInWithEmailAndPassword(email, password);
        if(user){
            navigation("/")
        }

    }
    const navigateRegister =()=>{
        navigation('/regester')
    }
    const resetPassword = async()=>{
        const email = emailRef.current.value;
     if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
     }
     else{
         toast('please enter your email')
     }
    }

    return (
        <div className="container w-50 mx-auto">
            <h2 className="text-primary text-center mt-2">Please Login</h2>
            <Form onSubmit={handleSubment}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                    <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>

            </Form>
            <p>New to Genius Car : <Link to="/regester"className="text-primary pe-auto text-decoration-none" onClick={navigateRegister}>please Register.</Link></p>
            <p>Fotget Password <button className=" btn btn-link text-primary pe-auto text-decoration-none" onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
                  </div>
    );
};

export default Login;