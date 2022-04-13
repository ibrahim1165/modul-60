import React from 'react';
import google from '../../../social/google.png'
import facebook from '../../../social/facebook.png'
import github from '../../../social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firbase.int';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] =useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth); 
      let errorElement;
    if (error || error1) {
       errorElement = (<p className="text-danger">Error:{error?.message} {error1.message}</p>
        )
    }
        if(user || user1){
            navigate('/')
        }
    return (
        <div>
            <div className="d-flex align-item-center">
                <div style={{height:"1px"}} className="bg-primary w-50"></div>
                   <div><p className="text-center">Or</p>
                   {errorElement}</div>
                <div style={{height:"1px"}} className="bg-primary w-50"></div>
            </div>
            <button
            onClick={()=>signInWithGoogle()}
            className="btn btn-info w-50 d-block mx-auto">
                <img style={{width:"40px"}} src={google} alt="" />
               <span className="px-1">Google Singin</span>
            </button>
            <button className="btn btn-info w-50 d-block mx-auto my-2">
                <img style={{width:"40px"}} src={facebook} alt="" />
               <span className="px-1">Facebook</span>
            </button>
            <button
            onc
            onClick={()=>signInWithGithub()}
            className="btn btn-info w-50 d-block mx-auto">
                <img style={{width:"40px"}} src={github} alt="" />
               <span className="px-1">GitHub</span>
            </button>
        </div>
    );
};

export default SocialLogin;
