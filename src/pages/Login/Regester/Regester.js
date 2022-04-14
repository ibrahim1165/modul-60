import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Regester.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firbase.int'
import SocialLogin from '../SocialLogin/SocialLogin';

const Regester = () => {
const navigate = useNavigate();
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
  const [updateProfile, updating, updaterror] = useUpdateProfile(auth);
  const [agree , setagree] = useState(false)
const handleRegister =async (event) =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email= event.target.email.value;
    const password = event.target.password.value;  
    // const agree = event.target.terms.checkbox;
  createUserWithEmailAndPassword(email,password)
  await updateProfile({ displayName : name});
  console.log('Updated profile');
  navigate("/home")

    if(user){
        navigate("/home")
    }
}


const navigateLogin = e =>{
    navigate("/login");
   
}



    return (
        <div className="register-form">
            <h2 className="text-center mt-3">Please register</h2>
            <Form onSubmit={handleRegister}>
              <input type="text" name="name" id="" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email"  required /> 
                    <input type="password" name="password" id="" placeholder="Password" required/>
                <input onClick={()=>setagree(!agree)} type="checkbox" name="trams" id="trams" />
                 <label className={agree ? "px-2 text-primary" : "px-2 text-danger"} htmlFor="terms"> Accept Terms & Conditions</label>
                    <input 
                    disabled={!agree}
                    className="w-50 mx-auto btn btn-primary mt-2"  type="submit" value="Register" />
            </Form>
            <p>Alredy have an Account ?<Link to="/login"className="text-prmary pe-auto text-decoration-none" onClick={navigateLogin}>please Login.</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Regester;
