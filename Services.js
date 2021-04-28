import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Services=()=>{
    return(
        <>
            <div className="container-fluid padding">
                <h1 className="text-center padding">Service's</h1>
                <hr className="my-4"/>
                <div className="row padding">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="Images/service1.jpg" className="card-image-top w-100" style={{height:'330px'}}/>
                            <div className="card-body">
                                <h3 className="card-title">Wheel Alignment</h3>
                                <p className="card-text">
                                    Complete wheel check, 
                                    alignment and modifications will be made quickly
                                </p>
                                <a className="btn btn-outline-warning">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="Images/service3.jpg" className="card-image-top w-100" style={{height:'330px'}}/>
                            <div className="card-body">
                                <h3 className="card-title">Engine Service</h3>
                                <p className="card-text">
                                    Engine service, warranty claim, replacement made easily
                                    with friendly support assistance
                                </p>
                                <a className="btn btn-outline-warning">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="images/service4.jpg" className="card-image-top w-100" style={{height:'330px'}}/>
                            <div className="card-body">
                                <h3 className="card-title">General Service</h3>
                                <p className="card-text">
                                    Complete general service with milage checkup, oil checkup, tuning etc,.
                                </p>
                                <a className="btn btn-outline-warning">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Services;