import React from 'react';
 import export1 from '../../../images/experts/expert-1.jpg'
 import export2 from '../../../images/experts/expert-2.jpg'
 import export3 from '../../../images/experts/expert-3.jpg'
 import export4 from '../../../images/experts/expert-4.jpg'
 import export5 from '../../../images/experts/expert-5.jpg'
 import export6 from '../../../images/experts/expert-6.png'
import Expart from '../Expart/Expart';

 const exports = [
    {id:1 , name:'will cary' , img: export1},
    {id:2 , name:'will dawm' , img: export2},
    {id:3 , name:'caraxy' , img: export3},
    {id:4 , name:'neymar' , img: export4},
    {id:5 , name:'ronaldo' , img: export5},
    {id:6, name:'sala' , img: export6},
 ]
const Exparts = () => {
    return (
        <div className="container">
            <h2 className="text-primary text-center">Our Expart</h2>
            <div className="row">
                {
                   exports.map(expart =><Expart
                   key={expart.id}
                   expart={expart}
                   
                   ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;