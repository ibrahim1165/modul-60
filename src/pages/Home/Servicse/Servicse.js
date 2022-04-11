import React, { useEffect, useState } from 'react';
import Serves from '../../Serves/Serves';
import './Servicse.css'

const Servicse = () => {
    const [servicse, setservicse] = useState([])

    useEffect(()=>{
        fetch("cars.json")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setservicse(data)
        })
    },[])
    return (
        <div>
            <h2 className="servise-title">Our Serveses</h2>
           <div className="Continar-serves">
           {
                servicse.map(servis=> <Serves key={servis.id} servis={servis}></Serves>)
            }
           </div>
        </div>
    );
};

export default Servicse;