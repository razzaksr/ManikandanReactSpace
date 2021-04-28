import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Features=()=>{
    return(
        <>
            <div class="container-fluid padding">
                <h1 class="text-center padding">Features</h1>
                <hr class="my-4"/>
                <div class="row padding">
                    <div class="col-lg-6 align-self-center">
                        <h3>Awesome features of Avenger</h3>
                        <p className="lead">Multi function display, odo, trip, speed</p>
                        <p className="lead">Classic design head lamp</p>
                        <p className="lead">220c DTSi Engine</p>
                        <p className="lead">Oil cooling</p>
                        <a href="#">
                            <button class="btn btn-outline-warning">More</button>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="w-100 d-block"
                                src="Images/feat1.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-100 d-block"
                                src="Images/feat2.jpg"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-100 d-block"
                                src="Images/feat3.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="w-100 d-block"
                                src="Images/feat4.jpg"
                                alt="Fourth slide"
                                />
                            </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;