import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Footing=()=>{
    return(
        <>
            <div className="container-fluid" style={{marginTop:'100px'}}>
                <footer className="bg-dark text-light">
                    <p className="text-center text-light">&copy; All Copyrights reserved to Zealous</p>
                </footer>
            </div>
        </>
    );
}

export default Footing;