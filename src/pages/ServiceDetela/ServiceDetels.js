import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetels = () => {
    const {serviceId} = useParams();
    
    return (
        <div>
           <h2>welcome to ServiceDetels:{serviceId}</h2> 
        </div>
    );
};

export default ServiceDetels;