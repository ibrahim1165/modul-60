import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Serves.css'

const Serves = ({servis}) => {
    const {name,img,price,description, _id} =servis;
    const navegete = useNavigate();
    const navegateToServis = id =>{
        navegete(`/service/${id}`)
    }
    return (
        <Container>
            <div id="services" className="continar-serves">
            <img src={img} alt="" />
            <p> {name}</p>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> navegateToServis(_id)} class="btn btn-primary">Explor Now</button>

        </div>
        </Container>
    );
};

export default Serves;