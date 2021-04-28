const NewBikeUser=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="my-4 row justify-content-center">
                    <div className="col-md-6 col-sm-12 border rounded shadow p-3">
                        <h1 className="text-center text-primary">Adding new authoriser</h1>
                        <form>
                            <div className="form-group">
                                <label>User name</label>
                                <input type="text" name="user" 
                                placeholder="Choose username"
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="pass" 
                                placeholder="Choose password"
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name="conpass" 
                                placeholder="Confirm password"
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Full name</label>
                                <input type="text" name="fname" 
                                placeholder="Full name"
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Contact</label>
                                <input type="text" name="contact" 
                                placeholder="Contact"
                                className="form-control"/>
                            </div>
                            <div className="row justify-content-around">
                                <button className="btn btn-outline-info">Enroll</button>
                                <button className="btn btn-outline-dark">Clean</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewBikeUser;