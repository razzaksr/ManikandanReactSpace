import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Images from './Images/avlogo.png'


const Heading=()=>{
    return(
        <>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <img src={Images} height="80px" width="100px" className="ml-5"/>
                    <h1 className="ml-5 display-4 text-light"> Zealous Note </h1>
                </div>
            </div>
        </>
    );
}

export default Heading;