import React from 'react';
import './Serves.css'

const Serves = ({servis}) => {
    const {name,img,price,description} =servis;
    return (
        <div className="continar-serves">
            <img src={img} alt="" />
            <p> {name}</p>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button>Explor Now</button>

        </div>
    );
};

export default Serves;