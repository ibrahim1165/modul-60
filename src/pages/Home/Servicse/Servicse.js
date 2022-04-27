import React, { useEffect, useState } from 'react';
import Serves from '../../Serves/Serves';
import './Servicse.css'

const Servicse = () => {
    const [servicse, setservicse] = useState([])

    useEffect(()=>{
        fetch("https://serene-brushlands-83053.herokuapp.com/service")
        .then(res => res.json())
        .then(data =>setservicse(data)
        )
    },[])
    return (
        <div>
            <h2 className="servise-title">Our Serveses</h2>
           <div className="Continar-serves">
           {
                servicse.map(servis=> <Serves key={servis._id} servis={servis}></Serves>)
            }
           </div>
        </div>
    );
};

export default Servicse;