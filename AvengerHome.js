import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const AvengerHome=()=>{
    return(
        <>
            <div className="container-fluid">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="w-100"
                        height="600px"
                        src="Images/aven2.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 class="text-warning display-2">Avenger Cruise</h2>
                            <h3 class="text-light">Feel like god</h3>
                            <button class="btn btn-secondary">Book</button>
                            <button class="btn btn-outline-primary">Know More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="w-100"
                        height="600px"
                        src="Images/aven1.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="w-100"
                        height="600px"
                        src="Images/aven3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default AvengerHome;