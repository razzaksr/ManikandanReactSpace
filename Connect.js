import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp} from 'react-icons/fa'

const Connect=()=>{
    return(
        <>
            <div className="container-fluid padding">
                <h1 className="text-center padding">Connect to US</h1>
                <hr className="my-4"/>
                <div className="row padding">
                <div className="col-lg-6">
                    <form className="form">
                        <div className="form group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" placeholder="Your name" name="name"/>
                        </div>
                        <div className="form group">
                            <label for="org">Organization</label>
                            <input type="text" className="form-control" placeholder="Your organisation" name="org"/>
                        </div>
                        <div className="form group">
                            <label for="mobile">Contact</label>
                            <input type="text" className="form-control" placeholder="Your mobile number" name="mobile"/>
                        </div>
                        <div className="form group">
                            <label for="email">Email</label>
                            <input type="text" className="form-control" placeholder="Your email address" name="email"/>
                        </div>
                        <div className="form group">
                            <label for="msg">Enquiry</label>
                            <input type="text" className="form-control" placeholder="Your Message" name="msg"/>
                        </div>
                        
                        <div className="my-4 row justify-content-around">
                            <button className="btn btn-outline-primary " >Send</button>
                            <button className="btn btn-outline-dark" >Cancel</button>
                        </div>
                        
                    </form>
                </div>
                <div className="col-lg-6" >
                    <div className="social padding row justify-content-around">
                        <div className="col-sm-4 col-xs-12">
                            {/* <a href="https://www.facebook.com"><FaFacebook color="#3b5998" style={{height:'200px',width:'250px'}} /></a> */}
                            <a href="https://www.facebook.com"><FaFacebook color="#3b5998" style={{height:'200px',width:'250px'}} className="d-block w-100" /></a>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <a href="https://www.linkedin.com"><FaLinkedin color="#0077b5" style={{height:'200px',width:'250px'}} className="d-block w-100" /></a>
                        </div>
                    </div>
                    <div className="social padding row justify-content-around my-lg-4">
                        <div className="col-sm-4 col-xs-12">
                            <a href="https://www.instagram.com"><FaWhatsapp color="#4fce5d" style={{height:'200px',width:'250px'}} className="d-block w-100"/></a>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <a href="https://www.twitter.com"><FaTwitter color="#00acee" style={{height:'200px',width:'250px'}} className="d-block w-100"/></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Connect;