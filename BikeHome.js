const BikeHome=()=>{
    return(
        <>
            <div className="my-4 container-fluid">
                <div className="row justify-content-around">
                    <div className="col-md-4 col-sm-12 align-self-center border p-5 shadow rounded">
                        <h1 className="display-4">Service Authoriser Login</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" 
                                placeholder="Enter the username" 
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                placeholder="Enter the password" 
                                className="form-control"/>
                            </div>
                            <div className="row justify-content-around mb-4">
                                <button className="btn btn-outline-success badge-pill">Login</button>
                                <button className="btn btn-outline-secondary badge-pill">Clear</button>
                            </div>
                        </form>
                        <a className="text-primary" href="/newuser">For adding new authoriser</a>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="Images/service1.jpg" alt="Home Image" className="w-100 rounded shadow" style={{height:'600px'}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BikeHome;