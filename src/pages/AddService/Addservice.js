import React from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url =`https://serene-brushlands-83053.herokuapp.com/service`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=>{
            console.log(result);
        })
        console.log(data);
    };
    
    
    return (
        <div className="w-50 mx-auto">
            <h2>please add service</h2>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" {...register("Name", { required: true, maxLength: 20 })} placeholder="name" />
                <input className="mb-2"  {...register("description")} placeholder="description" />
                <input className="mb-2"  type="number" {...register("price", { })} placeholder="price" />
                <input className="mb-2"  type="Photo url" {...register("img", { })} placeholder="url" />
                <input type="submit" value="add service" />
            </form>
        </div>
    );
};

export default Addservice;