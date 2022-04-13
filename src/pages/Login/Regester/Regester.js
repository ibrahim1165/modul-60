import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Regester.css'

const Regester = () => {

const navigate = useNavigate();
const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email= e.target.email.value;
    const password = e.target.password.value;  
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
                    <input type="submit" value="Register" />
            </Form>
            <p>Alredy have an Account ?<Link to="/login"className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>please Login.</Link></p>
        </div>
    );
};

export default Regester;
