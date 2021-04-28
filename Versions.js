import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import  from 'react-bootstrap';

const Versions=()=>{
    return(
        <>
            <div className="container-fluid padding">
                <div class="row welcome text-center">
                    <div class="col-12">
                        <h1 class="display-4">Feel Like God</h1>
                    </div>
                    <hr color="yellow"/>
                    <div class="col-12">
                        <p class="lead">
                            Comfortable ride with Avenger 150 Street, Avenger 220 Street and Avenger 220 Cruise
                        </p> 
                    </div>
                </div>
                <hr/>
                <h1 className="display-4 text-center padding">Versions</h1>
                <hr className="my-4"/>
                <div className="row text-center padding">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <img src="images/street160.jpg" className="w-100 d-block"/>
                        <h2>Street 150</h2>
                        <p class="lead">Avenger Street with matte finishing of 150 CC</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <img src="images/street220.jpg" className="w-100 d-block"/>
                        <h2>Street 220</h2>
                        <p class="lead">Avenger Street with matte finishing of 220 CC</p>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <img src="images/cruise220.jpg" className="w-100 d-block"/>
                        <h2>Cruise 220</h2>
                        <p class="lead">Avenger Cruise with HD model finishing of 220 CC</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Versions;