import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetels = () => {
    const {serviceId} = useParams();
    const [service,setservice]= useState({})
    useEffect(()=>{
        const url =`https://serene-brushlands-83053.herokuapp.com/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data=> setservice(data))
    },[])
    
    return (
        <div>
           <h2>You are are to bookto:{service.name}</h2> 
               <Link className="btn btn-primary text-center" to="/addservice">Chackout</Link>
               
               
        </div>
    );
};

export default ServiceDetels;